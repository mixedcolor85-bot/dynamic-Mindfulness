document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  // Wellness card data
  const wellnessData = {
    meditation: {
      icon: "🧘",
      title: "Meditation",
      desc: "Spend 10 minutes focusing on your breath to reduce stress.",
      details: `
        <h2 class="text-4xl font-bold mb-4">🧘 Meditation</h2>
        <p class="mb-4">Meditation helps reduce stress, improve focus, and enhance overall well-being.</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Find a quiet space</li>
          <li>Focus on your breathing</li>
          <li>Allow thoughts to pass without judgment</li>
          <li>Start with 5–10 minutes daily</li>
        </ul>
      `,
    },
    hydration: {
      icon: "💧",
      title: "Hydration",
      desc: "Track your daily water intake and stay hydrated.",
      details: `
        <h2 class="text-4xl font-bold mb-4">💧 Hydration</h2>
        <p class="mb-4">Drinking enough water improves energy, skin, and focus. Aim for 8 glasses daily.</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Carry a reusable water bottle</li>
          <li>Set reminders to drink water</li>
          <li>Eat water-rich foods like fruits</li>
        </ul>
      `,
    },
    sleep: {
      icon: "🌙",
      title: "Sleep",
      desc: "Maintain a healthy sleep cycle for better focus and energy.",
      details: `
        <h2 class="text-4xl font-bold mb-4">🌙 Sleep</h2>
        <p class="mb-4">Good sleep is crucial for body recovery and brain function. Adults need 7–9 hours.</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Keep a consistent sleep schedule</li>
          <li>Avoid screens before bed</li>
          <li>Create a relaxing bedtime routine</li>
        </ul>
      `,
    },
    nutrition: {
      icon: "🥗",
      title: "Nutrition",
      desc: "Log your meals and ensure a balanced diet every day.",
      details: `
        <h2 class="text-4xl font-bold mb-4">🥗 Nutrition</h2>
        <p class="mb-4">Balanced nutrition fuels your body and supports long-term health.</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Eat more fruits and vegetables</li>
          <li>Limit processed foods</li>
          <li>Stay consistent with meal times</li>
        </ul>
      `,
    },
    exercise: {
      icon: "🏋️",
      title: "Exercise",
      desc: "Stay active with daily workouts and fitness routines.",
      details: `
        <h2 class="text-4xl font-bold mb-4">🏋️ Exercise</h2>
        <p class="mb-4">Exercise strengthens your body, boosts energy, and improves mood.</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Do at least 30 minutes of activity daily</li>
          <li>Mix cardio and strength training</li>
          <li>Stretch regularly to stay flexible</li>
        </ul>
      `,
    },
    journaling: {
      icon: "📔",
      title: "Journaling",
      desc: "Reflect on your day and boost mindfulness with journaling.",
      details: `
        <h2 class="text-4xl font-bold mb-4">📔 Journaling</h2>
        <p class="mb-4">Journaling helps process emotions and improves mental clarity.</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Write at least 5 minutes daily</li>
          <li>Focus on gratitude and positive thoughts</li>
          <li>Review progress weekly</li>
        </ul>
      `,
    },
  };

  // Render the dashboard cards
  window.renderDashboard = function() {
    content.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto";
    content.innerHTML = Object.keys(wellnessData).map(key => {
      const card = wellnessData[key];
      return `
        <div onclick="renderDetail('${key}')"
             class="cursor-pointer backdrop-blur-xl bg-white/20 p-6 rounded-2xl shadow-lg border border-white/30 hover:scale-105 transition transform duration-300">
          <h2 class="text-2xl font-semibold text-white mb-3">${card.icon} ${card.title}</h2>
          <p class="text-white/80">${card.desc}</p>
        </div>`;
    }).join("");
  };

  // Render detail page
  window.renderDetail = function(key) {
    const card = wellnessData[key];
    content.className = "max-w-3xl mx-auto backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-xl p-8 text-white";
    content.innerHTML = `${card.details}
      <div class="mt-6">
        <button onclick="renderDashboard()" class="px-4 py-2 bg-white/30 rounded-xl hover:bg-white/50">⬅ Back to Dashboard</button>
      </div>`;
  };

  // Initial render
  renderDashboard();
});
