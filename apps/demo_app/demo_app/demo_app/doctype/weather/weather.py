# Copyright (c) 2026, Tri and contributors
# For license information, please see license.txt

from frappe.model.document import Document


class Weather(Document):

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		city: DF.Data
		condition: DF.Literal["Sunny", "Cloudy", "Rainy", "Snowy", "Stormy", "Foggy"]
		recorded_at: DF.Datetime
		temperature: DF.Float
