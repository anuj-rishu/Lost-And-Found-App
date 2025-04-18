from datetime import datetime
from pydantic import BaseModel, Field
from typing import Optional

class ItemBase(BaseModel):
    name: str
    description: Optional[str] = None
    location_found: str
    finder_name: str
    finder_contact: str
    status: str = "found"  # "found" or "claimed"

class ItemCreate(ItemBase):
    pass

class Item(ItemBase):
    id: str
    image_url: str
    found_date: datetime
    created_at: datetime = Field(default_factory=datetime.now)

    class Config:
        populate_by_name = True