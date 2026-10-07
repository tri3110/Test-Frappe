import frappe

@frappe.whitelist()
def get_weather_data(city: str | None = None):
    filters = {}

    if city:
        filters["city"] = city

    weather = frappe.get_all(
        "Weather",
        filters=filters,
        fields=[
            "name",
            "city",
            "temperature",
            "condition",
            "recorded_at",
        ],
        order_by="recorded_at desc",
    )

    return {
        "status": "success",
        "data": weather,
    }