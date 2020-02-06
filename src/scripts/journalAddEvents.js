import API from "/scripts/data.js";
import renderJournalEntries from "/scripts/entriesDOM.js";

const entryLog = document.querySelector(".entryLog")

const eventManager = {
  addRecordEntryEventListener() {
    const button = document.querySelector(".journalButton");

    button.addEventListener("click", () => {
      const inputJournalDate = document.getElementById("journalDate").value;
      const inputJournalConcepts = document.getElementById("journalConcepts")
        .value;
      const inputJournalEntry = document.getElementById("journalEntry").value;
      const inputJournalMood = document.getElementById("journalMood").value;

      if (
        inputJournalDate == false ||
        inputJournalConcepts == false ||
        inputJournalEntry == false
      ) {
        window.alert("Pleae fill out all Journal Entry Fields");
      } else {
        const createJournalEntry = {
          date: inputJournalDate,
          concept: inputJournalConcepts,
          entry: inputJournalEntry,
          mood: inputJournalMood
        };
        API.addJournalEntry(createJournalEntry).then(() => {
          API.getJournalEntries().then(renderJournalEntries);
        });
      }
    });
  },
  addRadioButtonEventListener() {
    const button = document.getElementsByName("moodBtn");

    button.forEach(function(radioButton) {
      radioButton.addEventListener("click", event => {
        const mood = event.target.value;

        if (mood == "excited") {
          let entries; // undefined until myAsyncFunc is called

          const myAsyncFunc = result => {
            entries = result;
            const excitedMood = entries.filter(mood => {
              let excited = false;
              if (mood.mood === "excited") {
                excited = true;
              }
              return excited;
            });

            renderJournalEntries(excitedMood);
          };

          API.getJournalEntries().then(myAsyncFunc);
        }
        if (mood == "happy") {
          let entries; // undefined until myAsyncFunc is called

          const myAsyncFunc = result => {
            entries = result;
            const happyMood = entries.filter(mood => {
              let happy = false;
              if (mood.mood === "happy") {
                happy = true;
              }
              return happy;
            });

            renderJournalEntries(happyMood);
          };

          API.getJournalEntries().then(myAsyncFunc);
        }
        if (mood == "meh") {
          let entries; // undefined until myAsyncFunc is called

          const myAsyncFunc = result => {
            entries = result;
            const mehMood = entries.filter(mood => {
              let meh = false;
              if (mood.mood === "meh") {
                meh = true;
              }
              return meh;
            });

            renderJournalEntries(mehMood);
          };

          API.getJournalEntries().then(myAsyncFunc);
        }
        if (mood == "sad") {
          let entries; // undefined until myAsyncFunc is called

          const myAsyncFunc = result => {
            entries = result;
            const sadMood = entries.filter(mood => {
              let sad = false;
              if (mood.mood === "sad") {
                sad = true;
              }
              return sad;
            });

            renderJournalEntries(sadMood);
          };

          API.getJournalEntries().then(myAsyncFunc);
        }
        if (mood == "stressed") {
          let entries; // undefined until myAsyncFunc is called

          const myAsyncFunc = result => {
            entries = result;
            const stressedMood = entries.filter(mood => {
              let stressed = false;
              if (mood.mood === "stressed") {
                stressed = true;
              }
              return stressed;
            });

            renderJournalEntries(stressedMood);
          };

          API.getJournalEntries().then(myAsyncFunc);
        }
        if (mood == "kitty") {
          let entries; // undefined until myAsyncFunc is called

          const myAsyncFunc = result => {
            entries = result;
            const kittyMood = entries.filter(mood => {
              let kitty = false;
              if (mood.mood === "kitty") {
                kitty = true;
              }
              return kitty;
            });

            renderJournalEntries(kittyMood);
          };

          API.getJournalEntries().then(myAsyncFunc);
        }
      });
    });
  },
  journalDeleteEventListener() {
    entryLog.addEventListener("click", (event) => {

        if(event.target.id.startsWith("deleteBtn--")){

            const entryIdToDelete = event.target.id.split("--")[1]

            API.deleteJournalEntry(entryIdToDelete).then(() => {
                API.getJournalEntries().then(renderJournalEntries)
              })
        }
    })
  }
};
export default eventManager;
