# Many2One External Link

Odoo renders everything inside of
the [WebClient](https://www.odoo.com/documentation/16.0/developer/reference/frontend/framework_overview.html#webclient-architecture).
This can sometimes become less desirable for the related models. `Many2OneExternalLink` widget replaces the `button`
with an `a` tag with the target set for `_blank`.

### Usage

In your view file simply add `widget="many2one_external_link.Many2OneExternalLink` as an attribute. As an example:

**Before**
```xml
<field name="partner_id" placeholder="required"/>
```

**After**
```xml
<field name="partner_id" placeholder="required" widget="many2one_external_link.Many2OneExternalLink"/>
```

