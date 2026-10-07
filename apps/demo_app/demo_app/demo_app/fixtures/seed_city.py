import frappe


CITIES = [
    {
        "city_name": "Ho Chi Minh City",
        "country": "Vietnam",
    },
    {
        "city_name": "Hanoi",
        "country": "Vietnam",
    },
    {
        "city_name": "Da Nang",
        "country": "Vietnam",
    },
    {
        "city_name": "Can Tho",
        "country": "Vietnam",
    },
    {
        "city_name": "Hai Phong",
        "country": "Vietnam",
    },
    {
        "city_name": "Nha Trang",
        "country": "Vietnam",
    },
]


def seed_cities():
    for city in CITIES:
        if frappe.db.exists("City", city["city_name"]):
            continue

        doc = frappe.get_doc({
            "doctype": "City",
            "city_name": city["city_name"],
            "country": city["country"],
            "status": 1,
        })

        doc.insert(ignore_permissions=True)

    frappe.db.commit()