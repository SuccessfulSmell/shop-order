from django.contrib.auth.models import User

from shop_users.models import UserDiscount, UserOrder


def get_discount(username: str) -> int:
    """ Get user discount.

    :param username: name of user.
    :return:         dict with error/discount (int type)
    """
    try:
        user_obj = User.objects.get(username=username)
        user_discount = UserDiscount.objects.get(user=user_obj)
        return user_discount.discount
    except User.DoesNotExist:
        return {'status': 'error', 'message': f'No user {username} in DataBase'}
    except UserDiscount.DoesNotExist:
        return {'status': 'error', 'message': f'No discount for user  {username}'}


def set_discount(username: str) -> None:
    """ Add discount for new user. """
    user_obj = User.objects.get(username=username)
    UserDiscount.objects.get_or_create(user=user_obj, discount=0)


def _get_order_products(order_products: list) -> list:
    """ Get all products by order.

    :param order_products:    list of products in order.
    :return:                  list of products get list of dicts of products.
    """
    products = []
    for product in order_products:
        product_count = product.product_count
        data = {'product_count': product_count,
                'product_name': product.product.name,
                'picture': product.product.picture,
                'price': product.product.price}
        products.append(data)
    return products


def get_user_products(username: str) -> list:
    """ Get user orders with products.

    :param username: name of user.
    :return:         list of user orders.
    """
    try:
        user_obj = User.objects.get(username=username)
        orders = UserOrder.objects.filter(user=user_obj)
        if orders:
            order_info = []
            for index, user_order in enumerate(orders):
                order_products = user_order.products.all()
                products = _get_order_products(order_products)
                data = {'order_id': index + 1,
                        'date_time': user_order.date,
                        'total_price': user_order.total_price,
                        'order_products': products}
                order_info.append(data)
            return order_info
        else:
            return []
    except User.DoesNotExist:
        return {'status': 'error', 'message': f'No user {username} in DataBase'}
    except Exception as error:
        print(str(error))
        return []
