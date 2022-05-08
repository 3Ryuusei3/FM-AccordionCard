// 1. Grab items
const items = [...document.querySelectorAll("li.faq__faq-item")];

// 2. Add Event listeners to our items that handle an item click
items.forEach((item) => {
	item.addEventListener("click", (e) => {
		// 2.1 Grab the clicked item
		const clickedItem = e.target.closest("li");
		// 2.2 Grab the itemDetail to add maxHeight
		const itemDetail = clickedItem.querySelector(".faq-item__detail");
		// 2.3 Check if the item has the active class
		const clickedItemActive = clickedItem.classList.contains("active");
		// 2.4 If it does, remove active class and if it does not, add the active class
		clickedItem.classList.toggle("active");
		if (clickedItemActive) {
			itemDetail.style.maxHeight = null;
		} else {
			// Even though the text is hidden, it still has a height
			// that we can access with its scrollHeight
			const scrollHeight = itemDetail.scrollHeight;
			itemDetail.style.maxHeight = `${scrollHeight}px`;
		}
	});
});

items[0].click();
