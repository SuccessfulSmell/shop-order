from django.urls import path
from .views import update_products, ProductsView, CategoriesView, \
    CategorySearchProducsView, IDSearchProducsView, MainCategoryGroupView

urlpatterns = [
    path('get_products/', ProductsView.as_view()),
    path('get_products/<str:category_id>/', CategorySearchProducsView.as_view()),
    path('get_product/<str:product_id>/', IDSearchProducsView.as_view()),
    path('get_categories/', CategoriesView.as_view()),
    path('get_group_categories/', MainCategoryGroupView.as_view()),
    path('update_products/', update_products),

]
