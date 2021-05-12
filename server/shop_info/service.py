""" Service for managing contacts and api info. """
import os
import json

from django.conf import settings

FILENAME = f'{settings.BASE_DIR}/configs/api_root.json'
ERROR_MSG = {'status': 'error', 'code': 500,
             'message': 'File for API root does not exists or incorrect'}


def get_api_root() -> dict:
    """ Get API root data from .json config file.

    :return: response for api root.
    """
    if not os.path.exists(FILENAME):
        return ERROR_MSG
    else:
        with open(FILENAME, 'r', encoding="utf8") as file:
            try:
                config = json.loads(file.read())
                return config
            except json.decoder.JSONDecodeError:
                return ERROR_MSG
