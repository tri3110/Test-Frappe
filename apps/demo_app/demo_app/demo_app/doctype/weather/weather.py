import frappe
from frappe.model.document import Document


class Weather(Document):

    from typing import TYPE_CHECKING

    if TYPE_CHECKING:
        from frappe.types import DF

        city: DF.Link
        condition: DF.Literal[
            "Sunny",
            "Cloudy",
            "Rainy",
            "Snowy",
            "Stormy",
            "Foggy"
        ]
        recorded_at: DF.Datetime
        temperature: DF.Float

    def validate_temperature(self):
        if self.temperature is None:
            return

        if self.temperature < -100 or self.temperature > 100:
            frappe.throw(
                "Temperature must be between -100°C and 100°C"
            )

    def validate_city(self):
        if not self.city:
            frappe.throw("City is required")

    def validate(self):
        self.validate_temperature()
        self.validate_city()