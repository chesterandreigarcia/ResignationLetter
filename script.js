function Generate() {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const position = document.getElementById("position").value;
  const company = document.getElementById("company").value;
  const manager = document.getElementById("manager").value;
  const date = document.getElementById("date").value;
  const reason = document.getElementById("reason").value;

  letter = `
    ${date}

    Dear ${manager || "Manager"},

    I am writing to formally resign from my position as ${position} at ${company}, effective ${date}.

    ${
      reason ? reason + "\n\n" : ""
    }
    I want to thank you and the company for the support and opportunities provided during my time here. I am truly grateful for the experiences I've gained.

    Please let me know how I can help with the transition. I wish you and the team continued success.

    Sincerely,  
    ${name}
    `;

  document.getElementById("letterContainer").textContent = letter;
}
