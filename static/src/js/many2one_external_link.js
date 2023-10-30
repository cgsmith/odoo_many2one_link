/** @odoo-module **/

'use strict';

import {registry} from "@web/core/registry";
import {Many2OneField} from "@web/views/fields/many2one/many2one_field";
import { browser } from "@web/core/browser/browser";

export class Many2OneExternalLink extends Many2OneField {

    /**
     * Return the full http path of the location
     *
     * - In the future different `view_type` could be passed through
     * - Link `target` could be passed too. Right now it is just `_blank` defined in the view/xml
     *
     * @returns {string}
     */
    get url() {
        return browser.location.origin + '/web#id=' + this.resId + '&view_type=form&model=' + this.relation;
    }

}

Many2OneExternalLink.template = "many2one_external_link.Many2OneExternalLink";
registry.category("fields").add("many2one_external_link.Many2OneExternalLink", Many2OneExternalLink);