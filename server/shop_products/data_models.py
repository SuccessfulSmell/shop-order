from pydantic import BaseModel, Field


class Product(BaseModel):
    name: str
    picture: str
    description: str
    article: str
    price: str
    price_rec: str = Field(alias='priceRec')
    price_opt: str = Field(alias='priceOpt')
    currency: str = Field(alias='currencyId')
    product_id: str = Field(alias='@id')
    available: bool = Field(alias='@available')
    url: str = Field(alias='url')
    category: str = Field(alias='categoryName')
