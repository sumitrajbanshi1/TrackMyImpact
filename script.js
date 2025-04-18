document.getElementById("achievement-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const entry = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    date: document.getElementById("date").value || new Date().toISOString().split('T')[0],
    tags: document.getElementById("tags").value,
    type: document.getElementById("type").value
  };

  let entries = JSON.parse(localStorage.getItem("entries")) || [];
  entries.unshift(entry);
  localStorage.setItem("entries", JSON.stringify(entries));

  this.reset();
  renderEntries();
});

function renderEntries() {
  const entriesContainer = document.getElementById("entries");
  entriesContainer.innerHTML = "";
  const entries = JSON.parse(localStorage.getItem("entries")) || [];

  entries.forEach((entry, index) => {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `
      <strong>${entry.title}</strong><br>
      <small>${entry.date} | ${entry.type} | ${entry.tags}</small>
      <p>${entry.description}</p>
    `;
    entriesContainer.appendChild(div);
  });
}

renderEntries();
