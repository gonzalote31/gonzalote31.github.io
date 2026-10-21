(function () {
	var form = document.getElementById("contact-form");
	var statusDiv = document.getElementById("form-status");
	var successCard = document.getElementById("form-success");
	var sendAnotherBtn = document.getElementById("send-another");
	if (!form) return;

	var conditionalBlocks = form.querySelectorAll(".conditional-fields");
	var intentRadios = form.querySelectorAll('input[name="intent"]');

	function getSelectedIntent() {
		var checked = form.querySelector('input[name="intent"]:checked');
		return checked ? checked.value : "";
	}

	function clearField(field) {
		if (field.type === "checkbox" || field.type === "radio") {
			field.checked = false;
		} else {
			field.value = "";
		}
	}

	function updateConditionalFields() {
		var intent = getSelectedIntent();
		conditionalBlocks.forEach(function (block) {
			var match = block.getAttribute("data-when") === intent;
			block.hidden = !match;
			if (!match) {
				block.querySelectorAll("input, select, textarea").forEach(clearField);
			}
		});
	}

	intentRadios.forEach(function (radio) {
		radio.addEventListener("change", updateConditionalFields);
	});

	form.addEventListener("submit", async function (e) {
		e.preventDefault();

		var tokenInput = form.querySelector('[name="cf-turnstile-response"]');
		var token = tokenInput ? tokenInput.value : "";

		if (!token) {
			statusDiv.textContent = "Por favor, completa la verificación anti-bot.";
			statusDiv.className = "form-status error";
			return;
		}

		var submitBtn = form.querySelector('button[type="submit"]');
		submitBtn.disabled = true;
		statusDiv.textContent = "Enviando...";
		statusDiv.className = "form-status";

		var intent = getSelectedIntent();
		var payload = {
			name: form.querySelector("#name").value.trim(),
			email: form.querySelector("#email").value.trim(),
			message: form.querySelector("#message").value.trim(),
			turnstileToken: token,
			intent: intent || "no_especificado"
		};

		if (intent === "freelance") {
			var budget = form.querySelector("#budget").value;
			var timeline = form.querySelector("#timeline").value;
			if (budget) payload.budget = budget;
			if (timeline) payload.timeline = timeline;
		} else if (intent === "trabajo") {
			var linkedin = form.querySelector("#linkedin").value.trim();
			if (linkedin) payload.linkedin = linkedin;
		} else if (intent === "otro") {
			var subject = form.querySelector("#subject").value.trim();
			if (subject) payload.subject = subject;
		}

		try {
			var response = await fetch("https://contact-worker.gonzalote31.workers.dev", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload)
			});

			var result = await response.json();
			if (response.ok) {
				statusDiv.textContent = "";
				statusDiv.className = "form-status";
				form.hidden = true;
				successCard.hidden = false;
				form.reset();
				updateConditionalFields();
				if (window.turnstile) {
					turnstile.reset();
				}
			} else {
				statusDiv.textContent = "Error: " + (result.error || "No se pudo enviar el mensaje.");
				statusDiv.className = "form-status error";
				if (window.turnstile) {
					turnstile.reset();
				}
			}
		} catch (err) {
			statusDiv.textContent = "Ocurrió un error al conectar con el servidor.";
			statusDiv.className = "form-status error";
		} finally {
			submitBtn.disabled = false;
		}
	});

	if (sendAnotherBtn) {
		sendAnotherBtn.addEventListener("click", function () {
			successCard.hidden = true;
			form.hidden = false;
			statusDiv.textContent = "";
			statusDiv.className = "form-status";
			var nameField = form.querySelector("#name");
			if (nameField) {
				nameField.focus();
			}
		});
	}
})();
