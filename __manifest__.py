# -*- coding: utf-8 -*-

{
    'name': 'Many2One External Link',
    'category': 'Extra Tools',
    'summary': 'Allows for Many2One fields to open in a new tab with _blank',
    'description': """  
    Allows a widget to be used on the views that will open related fields in a new tab
    """,
    'author': 'Chris Smith',
    'website': 'https://www.mount7.com',
    'price': 0.00,
    'currency': 'EUR',
    'version': '1.0.0',
    'depends': ['base', 'web'],
    'assets': {
        'web.assets_backend': [
            'many2one_external_link/static/src/xml/many2one_external_link.xml',
            'many2one_external_link/static/src/js/many2one_external_link.js',
        ],
    },
    'license': 'MIT',
    'installable': True,
    'auto_install': False,
}
