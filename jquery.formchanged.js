/*jslint onevar: true, forin: true, maxlen: 120, indent: 4 */
/*global jQuery:false */

(function ($) {
    
    function elementChanged() {
        var value, attr, nodeName, type;
        
        nodeName = this.nodeName.toLowerCase();
        type = this.type;
        
        // textarea
        if (nodeName === "textarea") {
            value = this.value;
            attr = this.defaultValue;
        }

        // input
        else if (nodeName === "input") {
            if (type === "radio" || type === "checkbox") {
                value = this.checked;
                attr = this.getAttributeNode("checked");
                attr = attr !== null && attr.nodeValue !== false;
            }
            else {
                value = this.value;
                // if no attribute is present, getAttribute returns null
                attr = this.getAttribute("value") || "";
            }
        } 
        
        // select
        else if (nodeName === "option") {
            value = this.selected;
            attr = this.getAttributeNode("selected");
            attr = attr !== null && attr.nodeValue !== false;
        }

        return attr !== value;
    }
    
    $.fn.formchanged = function () {
        var form, elements, changed;
        
        form = this.closest("form");
        elements = form.find("input, textarea, option");
        
        changed = elements.filter(elementChanged);
        
        return changed;
    };
    
}(jQuery));
