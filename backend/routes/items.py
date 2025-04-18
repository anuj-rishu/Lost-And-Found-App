from fastapi import APIRouter, UploadFile, File, Form, HTTPException, Depends
from typing import List, Optional
import cloudinary.uploader
from datetime import datetime
import uuid
from bson.objectid import ObjectId

from config import db
from models import Item, ItemCreate

router = APIRouter()

@router.post("/items/", response_model=Item)
async def create_item(
    name: str = Form(...),
    description: Optional[str] = Form(None),
    location_found: str = Form(...),
    finder_name: str = Form(...),
    finder_contact: str = Form(...),
    found_date: str = Form(...),
    image: UploadFile = File(...)
):
    try:
        # Upload image to Cloudinary
        result = cloudinary.uploader.upload(image.file)
        image_url = result.get("secure_url")
        
        # Create item
        item_data = {
            "id": str(uuid.uuid4()),
            "name": name,
            "description": description,
            "location_found": location_found,
            "finder_name": finder_name,
            "finder_contact": finder_contact,
            "status": "found",
            "image_url": image_url,
            "found_date": datetime.fromisoformat(found_date),
            "created_at": datetime.now()
        }
        
        # Insert into database
        db.lost_items.insert_one(item_data)
        
        return item_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error creating item: {str(e)}")

@router.get("/items/", response_model=List[Item])
async def get_items(status: Optional[str] = None):
    query = {}
    if status:
        query["status"] = status
        
    items = list(db.lost_items.find(query))
    # Convert ObjectId to string
    for item in items:
        if "_id" in item:
            item["_id"] = str(item["_id"])
    
    return items

@router.get("/items/{item_id}", response_model=Item)
async def get_item(item_id: str):
    item = db.lost_items.find_one({"id": item_id})
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    
    if "_id" in item:
        item["_id"] = str(item["_id"])
    
    return item

@router.put("/items/{item_id}/claim")
async def claim_item(item_id: str):
    result = db.lost_items.update_one(
        {"id": item_id},
        {"$set": {"status": "claimed"}}
    )
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Item not found")
    
    return {"message": "Item claimed successfully"}