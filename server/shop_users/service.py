from django.contrib.auth.models import User

from .models import UserOrder, ProductsInOrder, UserDiscount
from shop_products.models import Products


def add_new_order(username: str, products: list) -> dict:
    """ Add order in Database.

    :param username: name of user.
    :param products: list with products ID's.
    :return:         dict response status.
    """
    try:
        total_price = 0

        user_obj = User.objects.get(username=username)
        orders = UserOrder.objects.create(user=user_obj, total_price=float(total_price))
        discount = UserDiscount.objects.get(user=user_obj)

        product_list = []
        for product_id in products:
            product = Products.objects.filter(product_id=str(product_id))

            if product_id not in product_list:
                product_list.append(product_id)
                product_count = products.count(product_id)
                total_price += float(product[0].price) * product_count
            else:
                continue

            products_in_order = ProductsInOrder(user=user_obj,
                                                product_count=product_count, product=product[0])
            products_in_order.save()
            if products_in_order:
                orders.products.add(products_in_order)
        orders.total_price = total_price - total_price * discount.discount / 100
        orders.save()
        return {'message': 'Order was set', 'status': 'OK'}
    except User.DoesNotExist:
        return {'status': 'error', 'message': f'No user {username} in DataBase', 'code': 401}
    except Exception as error:
        return {'status': 'error', 'message': str(error), 'code': 500}
