const quizzes = [
  [
    {
      "frage": "Was versteht man unter Quadraturmodulation und warum wird sie für viele digitale Übertragungsverfahren als Basis verwendet? (S.5)",
      "antwort": `Bei der Quadraturmodulation werden zwei Trägersignale verwendet, die um 90° phasenverschoben sind. Diese beiden Signale nennt man I- und Q-Komponente. Dadurch kann man zwei unabhängige Informationsanteile gleichzeitig über denselben Frequenzbereich übertragen.
      
                  Der große Vorteil ist also, dass man Amplitude und Phase des Signals gezielt verändern kann und dadurch viele verschiedene Symbole darstellen kann. Deshalb bildet die Quadraturmodulation die Grundlage für Verfahren wie QPSK und QAM. Sie ermöglicht eine hohe spektrale Effizienz, weil mehrere Bits pro Symbol übertragen werden können.`
    },
    {
      "frage": "Zeichnen Sie ein 16-QAM-Konstellationsdiagramm und geben Sie die Bitzuordnung an. (S.26)",
      antwortBild: "16qam.png"
    },
    {
      "frage": "Was versteht man unter „Gray-Code“? Warum ist es wichtig einen Gray-Code beim Symbolmapping zu verwenden? (S.24)",
      "antwort": `Beim Gray-Code werden die Bits den Konstellationspunkten so zugeordnet, dass sich zwei benachbarte Symbole immer nur in einem Bit unterscheiden. Das ist beim Symbolmapping wichtig, weil durch Rauschen oder Verzerrungen ein gesendetes Symbol häufig als benachbartes Symbol entschieden wird.
        
                  Durch den Gray-Code führt diese Symbolverwechslung dann nur zu einem Bitfehler. Dadurch wird die Bitfehlerrate gegenüber einer ungünstigen Zuordnung reduziert.`
    },
    {
      "frage": "Was sind „Soft-bits“? (S.40)",
      "antwort": `Soft-Bits sind keine reinen 0- oder 1-Entscheidungen, sondern enthalten zusätzlich eine Information darüber, wie sicher diese Entscheidung ist.
        
                  Statt also nur zu sagen ‚Das Bit ist 0‘, gibt ein Soft-Bit beispielsweise an, wie wahrscheinlich 0 oder 1 ist bzw. wie stark das empfangene Signal für eine der beiden Möglichkeiten spricht.`
    },
    {
      "frage": "Was ist die Aufgabe des Kanalcodierers? (S.20)",
      "antwort": `Der Kanalcodierer fügt den Nutzdaten gezielt Redundanz hinzu, um Übertragungsfehler beim Empfänger mithilfe von FEC (Forward Error Correction) erkennen und korrigieren zu können.
      
      FEC ist ein Verfahren zur Vorwärtsfehlerkorrektur, bei dem durch zusätzliche Redundanz Übertragungsfehler beim Empfänger ohne erneute Übertragung erkannt und korrigiert werden können.`
    },
    {
      "frage": "Welche Arten der Kanalcodierung kennen Sie? (S.36)",
      "antwort": "Bei der Kanalcodierung unterscheidet man grundsätzlich zwischen Faltungscodes und Blockcodes. Beispiele für Blockcodes sind BCH-, Reed-Solomon- und LDPC-Codes; Faltungscodes können beispielsweise mit dem Viterbi-Algorithmus dekodiert werden."
    },
    {
      "frage": "Was versteht man unter „Hamming-Distanz“? (S.53)",
      "antwort": "Die Hamming-Distanz gibt die Anzahl der Bitpositionen an, an denen sich zwei gleich lange Codewörter unterscheiden. Die minimale Hamming-Distanz eines Codes bestimmt dabei seine Fähigkeit zur Fehlererkennung und Fehlerkorrektur."
    },
    {
      "frage": "Nach welchem Prinzip arbeitet ein Viterbi-Decoder? (S.39)",
      "antwort": `Der Viterbi-Decoder dekodiert Faltungscodes, indem er im Trellis für die möglichen Zustandsübergänge Metriken berechnet, diese zu Pfadmetriken aufsummiert und für jeden Zustand jeweils nur den Pfad mit der besten Metrik weiterverfolgt.
      Am Ende wird der wahrscheinlichste Pfad ausgewählt und daraus die ursprüngliche Bitfolge bestimmt. Bei Soft-Decision-Decodierung wird zusätzlich die Zuverlässigkeit der empfangenen Bits berücksichtigt.`
    },
    {
      "frage": "Begründen Sie den Aufbau der Präambel bei WLAN 802.11a. (S.62)",
      "antwort": `Die Präambel von WLAN 802.11a besteht aus Short Training Symbols (STS) und Long Training Symbols (LTS). Die periodischen STS dienen zur Signalerkennung sowie zur groben Zeit- und Frequenzsynchronisation. 
      Die anschließend übertragenen LTS dienen insbesondere zur genaueren Synchronisation und zur Kanalschätzung, indem das bekannte Trainingssignal mit dem empfangenen Signal verglichen wird.`
    },
    {
      "frage": "Wie läuft die Synchronisation bei 802.11a ab? (S.62)",
      "antwort": "Bei 802.11a erfolgt die Synchronisation mithilfe der Präambel. Die periodischen STS dienen zur Signalerkennung sowie zur groben Zeit- und Frequenzsynchronisation. Anschließend werden die LTS zur genaueren Synchronisation und insbesondere zur Kanalschätzung verwendet, indem das bekannte Trainingssignal mit dem empfangenen Signal verglichen wird."
    },
    {
      "frage": "Was ist die Constraint Length? (S.37)",
      "antwort": "Die Constraint Length K eines Faltungscodes gibt an, über wie viele aufeinanderfolgende Eingangsbits sich die Codierung erstreckt. Bei K=3 werden das aktuelle und die zwei vorherigen Bits zur Bildung der Ausgangsbits berücksichtigt."
    },
    {
      "frage": "Warum benutzt man ein komplexes Basisband? (S.15)",
      "antwort": "Das komplexe Basisband entkoppelt die Signalverarbeitung weitgehend von der Trägerfrequenz und ermöglicht gleichzeitig eine einfache Darstellung von Amplitude und Phase durch die I- und Q-Komponenten."
    },
    {
      "frage": "Was ist der Normierungsfaktor? (S.27)",
      "antwort": "Der Normierungsfaktor skaliert die Symbole so, dass ihre Leistung bzw. Energie auf einen definierten Referenzwert gebracht wird."
    }
  ],
  [
    {
      "frage": "Welche Aufgaben hat der Modulator bei der Bandpassübertragung? (S.20)",
      "antwort": `Der Modulator fasst die Bits zu Symbolen zusammen, führt die Pulsformung bzw. Bandbegrenzung mit einem RRC-Filter durch und setzt das komplexe Basisbandsignal mithilfe einer Trägerfrequenz in den gewünschten Bandpassbereich um.`
    },
    {
      "frage": "Warum wird sowohl ein Empfangsfilter als auch ein Sendefilter in der Basisbandübertragung verwendet? (S.3)",
      "antwort": "Ein Sendefilter wird verwendet, um das Sendesignal bandzubegrenzen, während ein Empfangsfilter Störungen und unerwünschte Frequenzanteile aus dem empfangenen Signal entfernt."
    },
    {
      "frage": "Warum sind das Sende- und Empfangsfilter beide Root-Raised-Cosine-Filter? (S.3)",
      "antwort": "Sende- und Empfangsfilter sind beide Root-Raised-Cosine-Filter, weil sich ihre Übertragungsfunktionen zusammen zu einem Raised-Cosine-Filter ergänzen und dadurch eine bandbegrenzte, ISI-freie Übertragung ermöglicht wird."
    },
    {
      "frage": "Wie werden Softbits bestimmt? (S.34)",
      "antwort": `Softbits werden mithilfe des Log-Likelihood-Ratio (LLR) berechnet, der angibt, wie viel wahrscheinlicher es ist, dass der empfangene Signalwert einer 1 statt einer 0 beziehungsweise einer 0 statt einer 1 entspricht. 
      Dadurch enthalten Softbits neben der Bitentscheidung auch Informationen über die Zuverlässigkeit der Entscheidung.`
    },
    {
      "frage": "Wofür braucht man Softbits? (S.40)",
      "antwort": "Softbits werden für die Kanaldecodierung bzw. Fehlerkorrektur benötigt, da sie dem Decoder neben dem Bitwert auch die Zuverlässigkeit der Entscheidung liefern und dadurch eine bessere Fehlerkorrektur ermöglichen."
    },
    {
      "frage": "Kann man Softbits mit Blockcodes verwenden?",
      "antwort": "Ja, Softbits können auch bei Blockcodes verwendet werden, wenn der verwendete Decoder Soft-Decision-Decoding unterstützt. Dadurch kann der Decoder die Zuverlässigkeit jedes Bits berücksichtigen und die Fehlerkorrektur verbessern."
    },
    {
      "frage": "Wie funktioniert die Synchronisation bei WLAN (Frequenz- und Timing-Synchronisation)? (S.56)",
      "antwort": `Bei WLAN erfolgt die Timing- und Frequenzsynchronisation mithilfe der Präambel, insbesondere der Short Training Sequence (STS). Da sich die STS periodisch wiederholt, kann der Empfänger durch Korrelation mit einer um 16 Abtastwerte verzögerten Sequenz den Beginn des WLAN-Bursts erkennen und damit die Zeitsynchronisation durchführen.
      
      Aus der Phase der Korrelation kann gleichzeitig ein Frequenzversatz zwischen Sender und Empfänger bestimmt und für die Frequenzsynchronisation korrigiert werden.`
    },
    {
      "frage": "Auf was muss man bei der Frequenzsynchronisation achten? (S.59)",
      "antwort": `Bei der Frequenzsynchronisation muss darauf geachtet werden, dass ein Frequenzversatz zwischen Sender und Empfänger zu einem ständig zunehmenden Phasenfehler führt.

      Bei der Frequenzsynchronisation darf die Phasendifferenz maximal ±180° (±π) betragen, da bei einer größeren Phasendifferenz Mehrdeutigkeiten durch Phasen-Wrapping entstehen.`
    },
    {
      "frage": "Wie sichern sich Broadcastsysteme wie DVB-T neben dem Viterbi-Decoder noch gegen Fehler ab? (S.61)",
      "antwort": `Broadcastsysteme wie DVB-T sichern sich zusätzlich zum Viterbi-Decoder durch eine äußere Reed-Solomon-Fehlerkorrektur gegen Fehler ab, wobei zuvor ein De-Interleaving stattfindet, um die durch das Interleaving verteilten Fehler wieder in ihre ursprüngliche Reihenfolge zu bringen.`
    },
    {
      "frage": "Wie sichert sich WLAN noch weiter gegen Fehler ab? (S.62)",
      "antwort": `WLAN sichert sich zusätzlich durch ein ARQ-Verfahren (Automatic Repeat Request) gegen Fehler ab, bei dem fehlerhafte Datenpakete erkannt und anschließend erneut übertragen werden.`
    },
    {
      "frage": "Was versteht man unter einem komplexen Basisbandmodell? (S.15)",
      "antwort": "Ein komplexes Basisbandmodell beschreibt ein Übertragungssystem mithilfe eines komplexen Signals aus In-Phase-Anteil (I) und Quadratur-Anteil (Q), wodurch Amplitude und Phase eines Bandpasssignals im Basisband dargestellt werden können."
    },
    {
      "frage": "Warum ist die Impulsantwort des Kanals komplexwertig?",
      "antwort": "Die Impulsantwort des Kanals ist komplexwertig, weil durch die komplexe Darstellung zwei Komponenten in einer einzigen Beschreibung zusammengefasst werden können, ähnlich wie bei der Quadraturmodulation mit dem I- und Q-Anteil."
    },
    {
      "frage": "Zeichne einen Faltungscodierer. (S.37)",
      antwortBild: "Faltungscodierer.png"
    },
    {
      "frage": "Welche Attribute kann man an einem Faltungscodierer ablesen?",
      "antwort": `An einem Faltungscodierer kann man die Coderate, die Constraint Length beziehungsweise Gedächtnislänge und die verwendeten Generatorpolynome ablesen.`
    },
    {
      "frage": "Muss man die Coderate erhöhen oder verkleinern, um einen besseren Fehlerschutz zu bekommen? (S.36)",
      "antwort": "Um einen besseren Fehlerschutz zu erhalten, muss die Coderate R = k/n verkleinert werden, da dadurch bei gleicher Anzahl an Informationsbits k mehr Codebits n und somit mehr Redundanz übertragen werden."
    },
    {
      "frage": "Wie kann ich eine Coderate von 2/3 erzeugen?",
      "antwort": "Eine Coderate von R = 2/3 kann durch Punktierung eines Faltungscodierers mit der ursprünglichen Coderate R = 1/2 erzeugt werden: Aus 2 Eingangsbits entstehen zunächst 4 Codebits, von denen anschließend ein Codebit gezielt nicht übertragen wird, sodass 3 Codebits übertragen werden und sich somit R = 2/3 ergibt."
    },
    {
      "frage": "Wie kann ich eine Coderate von 1/3 erzeugen?",
      "antwort": "Eine Coderate von R = 1/3 erhält man, indem ein Faltungscodierer verwendet wird, der aus 1 Eingangsbit 3 Codebits erzeugt."
    },
    {
      "frage": "Wie kann ich eine Coderate von 2/3 ohne Punktierung erreichen?",
      "antwort": "Ohne Punktierung kann man direkt einen Faltungscodierer mit zwei Eingangsbits und drei Ausgangsbits verwenden. Dadurch werden aus k = 2 Informationsbits jeweils n = 3 Codebits erzeugt, sodass sich direkt die Coderate R = k/n = 2/3 ergibt."
    },
    {
      "frage": "Was ist Rayleigh-Fading?",
      "antwort": "Rayleigh-Fading beschreibt eine Mehrwegeausbreitung ohne dominanten direkten Sichtweg, bei der sich viele reflektierte Signalanteile überlagern und dadurch die Empfangsamplitude stark schwankt."
    },
    {
      "frage": "Was ist Rice-Fading?",
      "antwort": "Rice-Fading beschreibt eine Mehrwegeausbreitung, bei der neben den reflektierten Signalanteilen ein dominanter direkter Sichtweg zwischen Sender und Empfänger vorhanden ist."
    },
    {
      "frage": "Was sind die Unterschiede zwischen Rayleigh-Fading und Rice-Fading?",
      "antwort": `Beispiel:
  	Du befindest dich mit deinem Handy in einem Gebäude und hast keine direkte Sicht zur Mobilfunkantenne. Das Signal erreicht dich hauptsächlich über Reflexionen → Rayleigh-Fading.

    Stehst du dagegen im Freien mit direkter Sicht auf die Mobilfunkantenne, gibt es einen starken direkten Signalweg zusätzlich zu Reflexionen → Rice-Fading.
    }
  ],
  [
    {
      "frage": "Was versteht man unter einem Nyquist-Filter und warum ist er wichtig in der Basisbandübertragung?",
      "antwort": "Antwort 1"
    },
    {
      "frage": "Warum wird das Raised-Cosine-Filter in zwei Root-Raised-Cosine-Filter aufgeteilt?",
      "antwort": "Antwort 2"
    },
    {
      "frage": "Wie funktioniert die Faltung im Frequenzbereich und was bedeutet das für die Modulation?",
      "antwort": "Antwort 3"
    },
    {
      "frage": "Erklären Sie das Prinzip der Amplitudenmodulation (AM).",
      "antwort": "Antwort 4"
    },
    {
      "frage": "Was passiert mit dem Spektrum, wenn ein Signal mit einer Cosinus-Schwingung multipliziert wird?",
      "antwort": "Antwort 5"
    },
    {
      "frage": "Warum ist das Spektrum eines realen Signals konjugiert-symmetrisch?",
      "antwort": "Antwort 6"
    },
    {
      "frage": "Was versteht man unter Quadraturmodulation und warum wird sie eingesetzt?",
      "antwort": "Antwort 7"
    },
    {
      "frage": "Was bedeutet „kohärente Demodulation“ und wann ist sie notwendig?",
      "antwort": "Antwort 8"
    },
    {
      "frage": "Wie funktioniert die synchrone Demodulation im Zeit- und Frequenzbereich?",
      "antwort": "Antwort 9"
    },
    {
      "frage": "Welche Rolle spielt der Tiefpassfilter nach der Demodulation?",
      "antwort": "Antwort 10"
    },
    {
      "frage": "Welche Vorteile bietet die IQ-Demodulation?",
      "antwort": "Antwort 11"
    },
    {
      "frage": "Wie funktioniert die Frequenzmodulation mathematisch?",
      "antwort": "Antwort 12"
    },
    {
      "frage": "Warum ist FM kein LTI-System?",
      "antwort": "Antwort 13"
    },
    {
      "frage": "Welche Vorteile bietet die Frequenzmodulation gegenüber AM?",
      "antwort": "Antwort 14"
    },
    {
      "frage": "Warum kann FM trotz theoretisch unendlichem Spektrum praktisch eingesetzt werden?",
      "antwort": "Antwort 15"
    },
    {
      "frage": "Was ist das komplexe Basisbandmodell und warum wird es in Simulationen bevorzugt?",
      "antwort": "Antwort 16"
    },
    {
      "frage": "Wie wird ein digitales Bandpasssystem im Blockschaltbild dargestellt?",
      "antwort": "Antwort 17"
    },
    {
      "frage": "Welche Vorteile bietet die Simulation im komplexen Basisband gegenüber einer Simulation im realen Bandpassbereich?",
      "antwort": "Antwort 18"
    },
    {
      "frage": "Wie funktioniert das Symbolmapping bei BPSK, QPSK und QAM?",
      "antwort": "Antwort 19"
    },
    {
      "frage": "Was ist ein Gray-Code und warum wird er verwendet?",
      "antwort": "Antwort 20"
    },
    {
      "frage": "Wie unterscheiden sich 16-QAM und 64-QAM in der Symbolzuordnung?",
      "antwort": "Antwort 21"
    },
    {
      "frage": "Was bedeutet „Decision Boundaries in Symbol Space“ (DUB-S)?",
      "antwort": "Antwort 22"
    },
    {
      "frage": "Wie arbeitet ein Maximum-Likelihood-Detektor?",
      "antwort": "Antwort 23"
    },
    {
      "frage": "Wie wird beim Demodulator das empfangene Symbol ausgewählt?",
      "antwort": "Antwort 24"
    },
    {
      "frage": "Was ist der Unterschied zwischen symbolweiser und bitweiser Detektion?",
      "antwort": "Antwort 25"
    },
    {
      "frage": "Erklären Sie den Begriff „Softbits“.",
      "antwort": "Antwort 26"
    },
    {
      "frage": "Wie wird der Log-Likelihood-Ratio (LLR) berechnet und interpretiert?",
      "antwort": "Antwort 27"
    },
    {
      "frage": "Wie funktioniert ein Faltungskodierer?",
      "antwort": "Antwort 28"
    },
    {
      "frage": "Was ist ein Trellisdiagramm und wie wird es genutzt?",
      "antwort": "Antwort 29"
    },
    {
      "frage": "Wie funktioniert der Viterbi-Algorithmus?",
      "antwort": "Antwort 30"
    },
    {
      "frage": "Was bedeutet „Full-Trace-Back“ und „Partial-Trace-Back“ beim Viterbi-Decoder?",
      "antwort": "Antwort 31"
    },
    {
      "frage": "Was ist ein Blockcode und wie ist er aufgebaut?",
      "antwort": "Antwort 32"
    },
    {
      "frage": "Wie bestimmt man die Hamming-Distanz und was bedeutet sie?",
      "antwort": "Antwort 33"
    },
    {
      "frage": "Was ist der Unterschied zwischen Fehlererkennung und Fehlerkorrektur?",
      "antwort": "Antwort 34"
    },
    {
      "frage": "Wie funktioniert ein Reed-Solomon-Code?",
      "antwort": "Antwort 35"
    },
    {
      "frage": "Was ist Punktierung und wie beeinflusst sie die Coderate?",
      "antwort": "Antwort 36"
    },
    {
      "frage": "Wie funktioniert die Wiederherstellung punktierter Bits im Empfänger?",
      "antwort": "Antwort 37"
    },
    {
      "frage": "Welche Arten der Synchronisation sind in der Nachrichtentechnik relevant?",
      "antwort": "Antwort 38"
    },
    {
      "frage": "Wie funktioniert die Burst-Erkennung bei WLAN?",
      "antwort": "Antwort 39"
    },
    {
      "frage": "Wie hilft die Korrelation bei der Frequenz- und Zeitsynchronisation?",
      "antwort": "Antwort 40"
    },
    {
      "frage": "Was ist die „Short Training Sequence“ (STS) und wofür wird sie verwendet?",
      "antwort": "Antwort 41"
    },
    {
      "frage": "Warum wird Interleaving eingesetzt?",
      "antwort": "Antwort 42"
    },
    {
      "frage": "Wie funktioniert ein Block-Interleaver?",
      "antwort": "Antwort 43"
    },
    {
      "frage": "Was ist der Zweck des „Energy Dispersal“ Blocks im DVB-T?",
      "antwort": "Antwort 44"
    },
    {
      "frage": "Wie unterscheidet sich das Interleaving bei DVB von dem bei WLAN?",
      "antwort": "Antwort 45"
    },
    {
      "frage": "Was ist der Unterschied zwischen CSMA/CD und CSMA/CA?",
      "antwort": "Antwort 46"
    },
    {
      "frage": "Warum ist bei Funkkanälen keine Kollisionserkennung möglich?",
      "antwort": "Antwort 47"
    },
    {
      "frage": "Was bedeutet ARQ und wie funktioniert es?",
      "antwort": "Antwort 48"
    },
    {
      "frage": "Wie verbessert Hybrid-ARQ die Übertragungsqualität?",
      "antwort": "Antwort 49"
    },
    {
      "frage": "Welche Rolle spielt der „Backoff-Timer“ im Medium Access?",
      "antwort": "Antwort 50"
    }
  ]
];

let aktuellesQuiz = 0;
let aktuelleFrage = 0;

const frageElement = document.getElementById("frage");
const fortschrittElement = document.getElementById("fortschritt");
const antwortElement = document.getElementById("antwort");
const antwortButton = document.getElementById("antwortButton");
const zurueckButton = document.getElementById("zurueckButton");
const weiterButton = document.getElementById("weiterButton");
const quizButtons = document.querySelectorAll(".quiz-button");

const fragenListe = document.getElementById("fragenListe");
let gespeicherteMarkierungen = null;

try {
  gespeicherteMarkierungen = JSON.parse(
    localStorage.getItem("quizGelernt") || "null"
  );
} catch (error) {
  gespeicherteMarkierungen = null;
}

const gelernt = quizzes.map((quiz, quizIndex) => {
  const gespeichert = gespeicherteMarkierungen?.[quizIndex];
  return Array.from({ length: quiz.length }, (_, index) =>
    Boolean(gespeichert?.[index])
  );
});

function speichereMarkierungen() {
  localStorage.setItem("quizGelernt", JSON.stringify(gelernt));
}

function aktualisiereFragenListe() {
  const quiz = quizzes[aktuellesQuiz];
  fragenListe.innerHTML = "";

  quiz.forEach((item, index) => {
    const zeile = document.createElement("div");
    zeile.className = "frage-zeile";

    const frageButton = document.createElement("button");
    frageButton.type = "button";
    frageButton.className = "frage-link";
    frageButton.textContent = String(index + 1);
    frageButton.title = item.frage;
    frageButton.addEventListener("click", () => {
      aktuelleFrage = index;
      anzeigen();
    });

    if (index === aktuelleFrage) {
      frageButton.classList.add("aktiv");
    }

    const statusButton = document.createElement("button");
    statusButton.type = "button";
    statusButton.className = "frage-status";
    statusButton.textContent = "✓";
    statusButton.title = gelernt[aktuellesQuiz][index]
      ? "Als ungelernt markieren"
      : "Als gelernt markieren";

    if (gelernt[aktuellesQuiz][index]) {
      statusButton.classList.add("gelernt");
    }

    statusButton.addEventListener("click", () => {
      gelernt[aktuellesQuiz][index] = !gelernt[aktuellesQuiz][index];
      speichereMarkierungen();
      aktualisiereFragenListe();
    });

    zeile.appendChild(frageButton);
    zeile.appendChild(statusButton);
    fragenListe.appendChild(zeile);
  });
}

function anzeigen() {
  const quiz = quizzes[aktuellesQuiz];
  const item = quiz[aktuelleFrage];

  frageElement.textContent = item.frage;
  fortschrittElement.textContent =
    "Frage " + (aktuelleFrage + 1) + " von " + quiz.length;

  antwortElement.textContent = "";
  antwortElement.style.display = "none";
  antwortButton.textContent = "Antwort anzeigen";

  quizButtons.forEach((button, index) => {
    button.classList.toggle("aktiv", index === aktuellesQuiz);
  });

  aktualisiereFragenListe();
}

function wechselQuiz(index) {
  aktuellesQuiz = index;
  aktuelleFrage = 0;
  anzeigen();
}

function zeigeAntwort() {
  if (antwortElement.style.display === "block") {
    antwortElement.style.display = "none";
    antwortButton.textContent = "Antwort anzeigen";
  } else {
    const item = quizzes[aktuellesQuiz][aktuelleFrage];

    antwortElement.innerHTML = "";

    if (item.antwort) {
      const text = document.createElement("div");
      text.textContent = item.antwort;
      antwortElement.appendChild(text);
    }

    if (item.antwortBild) {
      const bild = document.createElement("img");
      bild.src = item.antwortBild;
      bild.className = "antwort-bild";
      bild.alt = "Bild zur Antwort";
      antwortElement.appendChild(bild);
    }

    antwortElement.style.display = "block";
    antwortButton.textContent = "Antwort ausblenden";
  }
}

function vorherigeFrage() {
  const quiz = quizzes[aktuellesQuiz];
  aktuelleFrage = (aktuelleFrage - 1 + quiz.length) % quiz.length;
  anzeigen();
}

function naechsteFrage() {
  const quiz = quizzes[aktuellesQuiz];
  aktuelleFrage = (aktuelleFrage + 1) % quiz.length;
  anzeigen();
}

quizButtons.forEach((button) => {
  button.addEventListener("click", () => {
    wechselQuiz(Number(button.dataset.quiz));
  });
});

antwortButton.addEventListener("click", zeigeAntwort);
zurueckButton.addEventListener("click", vorherigeFrage);
weiterButton.addEventListener("click", naechsteFrage);

document.getElementById("fragenZuruecksetzen").addEventListener("click", () => {
  gelernt[aktuellesQuiz].fill(false);
  speichereMarkierungen();
  aktualisiereFragenListe();
});

anzeigen();
