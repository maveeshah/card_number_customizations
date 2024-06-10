frappe.widget.number_card.NumberCardWidget = class extends frappe.widget.number_card.NumberCardWidget {
    set_formatted_number(df) {
        console.log("Hi");
        super.set_formatted_number();
        const default_country = frappe.sys_defaults.country;
        const shortened_number = frappe.utils.shortened_number(this.number, defaults.curreny, 2);

        const symbol = number_parts[1] || "";
        const formatted_number = $(frappe.format(number_parts[0], df)).text();

        this.formatted_number = new_format;

    }
}