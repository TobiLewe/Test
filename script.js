const quizzes = [
  [
    {
      "thema": "Quadraturmodulation",
      "frage": "Was versteht man unter Quadraturmodulation und warum wird sie für viele digitale Übertragungsverfahren als Basis verwendet? (S.5)",
      "antwort": `Bei der Quadraturmodulation werden zwei Trägersignale verwendet, die um 90° phasenverschoben sind. Diese beiden Signale nennt man I- und Q-Komponente. Dadurch kann man zwei unabhängige Informationsanteile gleichzeitig über denselben Frequenzbereich übertragen.
      
                  Der große Vorteil ist also, dass man Amplitude und Phase des Signals gezielt verändern kann und dadurch viele verschiedene Symbole darstellen kann. Deshalb bildet die Quadraturmodulation die Grundlage für Verfahren wie QPSK und QAM. Sie ermöglicht eine hohe spektrale Effizienz, weil mehrere Bits pro Symbol übertragen werden können.`
    },
    {
      "thema": "16-QAM",
      "frage": "Zeichnen Sie ein 16-QAM-Konstellationsdiagramm und geben Sie die Bitzuordnung an. (S.26)",
      antwortBild: "16qam.png"
    },
    {
      "thema": "Gray-Code",
      "frage": "Was versteht man unter „Gray-Code“? Warum ist es wichtig einen Gray-Code beim Symbolmapping zu verwenden? (S.24)",
      "antwort": `Beim Gray-Code werden die Bits den Konstellationspunkten so zugeordnet, dass sich zwei benachbarte Symbole immer nur in einem Bit unterscheiden. Das ist beim Symbolmapping wichtig, weil durch Rauschen oder Verzerrungen ein gesendetes Symbol häufig als benachbartes Symbol entschieden wird.
        
                  Durch den Gray-Code führt diese Symbolverwechslung dann nur zu einem Bitfehler. Dadurch wird die Bitfehlerrate gegenüber einer ungünstigen Zuordnung reduziert.`
    },
    {
      "thema": "Softbits",
      "frage": "Was sind „Soft-bits“? (S.40)",
      "antwort": `Soft-Bits sind keine reinen 0- oder 1-Entscheidungen, sondern enthalten zusätzlich eine Information darüber, wie sicher diese Entscheidung ist.
        
                  Statt also nur zu sagen ‚Das Bit ist 0‘, gibt ein Soft-Bit beispielsweise an, wie wahrscheinlich 0 oder 1 ist bzw. wie stark das empfangene Signal für eine der beiden Möglichkeiten spricht.`
    },
    {
      "thema": "Kanalcodierer",
      "frage": "Was ist die Aufgabe des Kanalcodierers? (S.20)",
      "antwort": `Der Kanalcodierer fügt den Nutzdaten gezielt Redundanz hinzu, um Übertragungsfehler beim Empfänger mithilfe von FEC (Forward Error Correction) erkennen und korrigieren zu können.
      
      FEC ist ein Verfahren zur Vorwärtsfehlerkorrektur, bei dem durch zusätzliche Redundanz Übertragungsfehler beim Empfänger ohne erneute Übertragung erkannt und korrigiert werden können.`
    },
    {
      "thema": "Kanalcodierung",
      "frage": "Welche Arten der Kanalcodierung kennen Sie? (S.36)",
      "antwort": "Bei der Kanalcodierung unterscheidet man grundsätzlich zwischen Faltungscodes und Blockcodes. Beispiele für Blockcodes sind BCH-, Reed-Solomon- und LDPC-Codes; Faltungscodes können beispielsweise mit dem Viterbi-Algorithmus dekodiert werden."
    },
    {
      "thema": "Hamming-Distanz",
      "frage": "Was versteht man unter „Hamming-Distanz“? (S.53)",
      "antwort": "Die Hamming-Distanz gibt die Anzahl der Bitpositionen an, an denen sich zwei gleich lange Codewörter unterscheiden. Die minimale Hamming-Distanz eines Codes bestimmt dabei seine Fähigkeit zur Fehlererkennung und Fehlerkorrektur."
    },
    {
      "thema": "Viterbi-Decoder",
      "frage": "Nach welchem Prinzip arbeitet ein Viterbi-Decoder? (S.39)",
      "antwort": `Der Viterbi-Decoder dekodiert Faltungscodes, indem er im Trellis für die möglichen Zustandsübergänge Metriken berechnet, diese zu Pfadmetriken aufsummiert und für jeden Zustand jeweils nur den Pfad mit der besten Metrik weiterverfolgt.
      Am Ende wird der wahrscheinlichste Pfad ausgewählt und daraus die ursprüngliche Bitfolge bestimmt. Bei Soft-Decision-Decodierung wird zusätzlich die Zuverlässigkeit der empfangenen Bits berücksichtigt.`
    },
    {
      "thema": "WLAN-Präambel",
      "frage": "Begründen Sie den Aufbau der Präambel bei WLAN 802.11a. (S.62)",
      "antwort": `Die Präambel von WLAN 802.11a besteht aus Short Training Symbols (STS) und Long Training Symbols (LTS). Die periodischen STS dienen zur Signalerkennung sowie zur groben Zeit- und Frequenzsynchronisation. 
      Die anschließend übertragenen LTS dienen insbesondere zur genaueren Synchronisation und zur Kanalschätzung, indem das bekannte Trainingssignal mit dem empfangenen Signal verglichen wird.`
    },
    {
      "thema": "WLAN-Synchronisation",
      "frage": "Wie läuft die Synchronisation bei 802.11a ab? (S.62)",
      "antwort": "Bei 802.11a erfolgt die Synchronisation mithilfe der Präambel. Die periodischen STS dienen zur Signalerkennung sowie zur groben Zeit- und Frequenzsynchronisation. Anschließend werden die LTS zur genaueren Synchronisation und insbesondere zur Kanalschätzung verwendet, indem das bekannte Trainingssignal mit dem empfangenen Signal verglichen wird."
    },
    {
      "thema": "Constraint Length",
      "frage": "Was ist die Constraint Length? (S.37)",
      "antwort": "Die Constraint Length K eines Faltungscodes gibt an, über wie viele aufeinanderfolgende Eingangsbits sich die Codierung erstreckt. Bei K=3 werden das aktuelle und die zwei vorherigen Bits zur Bildung der Ausgangsbits berücksichtigt."
    },
    {
      "thema": "Komplexes Basisband",
      "frage": "Warum benutzt man ein komplexes Basisband? (S.15)",
      "antwort": "Das komplexe Basisband entkoppelt die Signalverarbeitung weitgehend von der Trägerfrequenz und ermöglicht gleichzeitig eine einfache Darstellung von Amplitude und Phase durch die I- und Q-Komponenten."
    },
    {
      "thema": "Normierungsfaktor",
      "frage": "Was ist der Normierungsfaktor? (S.27)",
      "antwort": "Der Normierungsfaktor skaliert die Symbole so, dass ihre Leistung bzw. Energie auf einen definierten Referenzwert gebracht wird."
    }
  ],
  [
    {
      "thema": "Modulator",
      "frage": "Welche Aufgaben hat der Modulator bei der Bandpassübertragung? (S.20)",
      "antwort": `Der Modulator fasst die Bits zu Symbolen zusammen, führt die Pulsformung bzw. Bandbegrenzung mit einem RRC-Filter durch und setzt das komplexe Basisbandsignal mithilfe einer Trägerfrequenz in den gewünschten Bandpassbereich um.`
    },
    {
      "thema": "Sende-/Empfangsfilter",
      "frage": "Warum wird sowohl ein Empfangsfilter als auch ein Sendefilter in der Basisbandübertragung verwendet? (S.3)",
      "antwort": "Ein Sendefilter wird verwendet, um das Sendesignal bandzubegrenzen, während ein Empfangsfilter Störungen und unerwünschte Frequenzanteile aus dem empfangenen Signal entfernt."
    },
    {
      "thema": "RRC-Filter",
      "frage": "Warum sind das Sende- und Empfangsfilter beide Root-Raised-Cosine-Filter? (S.3)",
      "antwort": "Sende- und Empfangsfilter sind beide Root-Raised-Cosine-Filter, weil sich ihre Übertragungsfunktionen zusammen zu einem Raised-Cosine-Filter ergänzen und dadurch eine bandbegrenzte, ISI-freie Übertragung ermöglicht wird."
    },
    {
      "thema": "Softbit-Bestimmung",
      "frage": "Wie werden Softbits bestimmt? (S.34)",
      "antwort": `Softbits werden mithilfe des Log-Likelihood-Ratio (LLR) berechnet, der angibt, wie viel wahrscheinlicher es ist, dass der empfangene Signalwert einer 1 statt einer 0 beziehungsweise einer 0 statt einer 1 entspricht. 
      Dadurch enthalten Softbits neben der Bitentscheidung auch Informationen über die Zuverlässigkeit der Entscheidung.`
    },
    {
      "thema": "Softbits",
      "frage": "Wofür braucht man Softbits? (S.40)",
      "antwort": "Softbits werden für die Kanaldecodierung bzw. Fehlerkorrektur benötigt, da sie dem Decoder neben dem Bitwert auch die Zuverlässigkeit der Entscheidung liefern und dadurch eine bessere Fehlerkorrektur ermöglichen."
    },
    {
      "thema": "Softbits & Blockcodes",
      "frage": "Kann man Softbits mit Blockcodes verwenden?",
      "antwort": "Ja, Softbits können auch bei Blockcodes verwendet werden, wenn der verwendete Decoder Soft-Decision-Decoding unterstützt. Dadurch kann der Decoder die Zuverlässigkeit jedes Bits berücksichtigen und die Fehlerkorrektur verbessern."
    },
    {
      "thema": "WLAN-Synchronisation",
      "frage": "Wie funktioniert die Synchronisation bei WLAN (Frequenz- und Timing-Synchronisation)? (S.56)",
      "antwort": `Bei WLAN erfolgt die Timing- und Frequenzsynchronisation mithilfe der Präambel, insbesondere der Short Training Sequence (STS). Da sich die STS periodisch wiederholt, kann der Empfänger durch Korrelation mit einer um 16 Abtastwerte verzögerten Sequenz den Beginn des WLAN-Bursts erkennen und damit die Zeitsynchronisation durchführen.
      
      Aus der Phase der Korrelation kann gleichzeitig ein Frequenzversatz zwischen Sender und Empfänger bestimmt und für die Frequenzsynchronisation korrigiert werden.`
    },
    {
      "thema": "Frequenzsynchronisation",
      "frage": "Auf was muss man bei der Frequenzsynchronisation achten? (S.59)",
      "antwort": `Bei der Frequenzsynchronisation muss darauf geachtet werden, dass ein Frequenzversatz zwischen Sender und Empfänger zu einem ständig zunehmenden Phasenfehler führt.

      Bei der Frequenzsynchronisation darf die Phasendifferenz maximal ±180° (±π) betragen, da bei einer größeren Phasendifferenz Mehrdeutigkeiten durch Phasen-Wrapping entstehen.`
    },
    {
      "thema": "DVB-T Fehlerschutz",
      "frage": "Wie sichern sich Broadcastsysteme wie DVB-T neben dem Viterbi-Decoder noch gegen Fehler ab? (S.61)",
      "antwort": `Broadcastsysteme wie DVB-T sichern sich zusätzlich zum Viterbi-Decoder durch eine äußere Reed-Solomon-Fehlerkorrektur gegen Fehler ab, wobei zuvor ein De-Interleaving stattfindet, um die durch das Interleaving verteilten Fehler wieder in ihre ursprüngliche Reihenfolge zu bringen.`
    },
    {
      "thema": "WLAN Fehlerschutz",
      "frage": "Wie sichert sich WLAN noch weiter gegen Fehler ab? (S.62)",
      "antwort": `WLAN sichert sich zusätzlich durch ein ARQ-Verfahren (Automatic Repeat Request) gegen Fehler ab, bei dem fehlerhafte Datenpakete erkannt und anschließend erneut übertragen werden.`
    },
    {
      "thema": "Komplexes Basisband",
      "frage": "Was versteht man unter einem komplexen Basisbandmodell? (S.15)",
      "antwort": "Ein komplexes Basisbandmodell beschreibt ein Übertragungssystem mithilfe eines komplexen Signals aus In-Phase-Anteil (I) und Quadratur-Anteil (Q), wodurch Amplitude und Phase eines Bandpasssignals im Basisband dargestellt werden können."
    },
    {
      "thema": "Komplexer Kanal",
      "frage": "Warum ist die Impulsantwort des Kanals komplexwertig?",
      "antwort": "Die Impulsantwort des Kanals ist komplexwertig, weil durch die komplexe Darstellung zwei Komponenten in einer einzigen Beschreibung zusammengefasst werden können, ähnlich wie bei der Quadraturmodulation mit dem I- und Q-Anteil."
    },
    {
      "thema": "Faltungscodierer",
      "frage": "Zeichne einen Faltungscodierer. (S.37)",
      antwortBild: "Faltungscodierer.png"
    },
    {
      "thema": "Coder-Attribute",
      "frage": "Welche Attribute kann man an einem Faltungscodierer ablesen?",
      "antwort": `An einem Faltungscodierer kann man die Coderate, die Constraint Length beziehungsweise Gedächtnislänge und die verwendeten Generatorpolynome ablesen.`
    },
    {
      "thema": "Coderate & Fehlerschutz",
      "frage": "Muss man die Coderate erhöhen oder verkleinern, um einen besseren Fehlerschutz zu bekommen? (S.36)",
      "antwort": "Um einen besseren Fehlerschutz zu erhalten, muss die Coderate R = k/n verkleinert werden, da dadurch bei gleicher Anzahl an Informationsbits k mehr Codebits n und somit mehr Redundanz übertragen werden."
    },
    {
      "thema": "Coderate 2/3",
      "frage": "Wie kann ich eine Coderate von 2/3 erzeugen?",
      "antwort": "Eine Coderate von R = 2/3 kann durch Punktierung eines Faltungscodierers mit der ursprünglichen Coderate R = 1/2 erzeugt werden: Aus 2 Eingangsbits entstehen zunächst 4 Codebits, von denen anschließend ein Codebit gezielt nicht übertragen wird, sodass 3 Codebits übertragen werden und sich somit R = 2/3 ergibt."
    },
    {
      "thema": "Coderate 1/3",
      "frage": "Wie kann ich eine Coderate von 1/3 erzeugen?",
      "antwort": "Eine Coderate von R = 1/3 erhält man, indem ein Faltungscodierer verwendet wird, der aus 1 Eingangsbit 3 Codebits erzeugt."
    },
    {
      "thema": "Coderate ohne Punktierung",
      "frage": "Wie kann ich eine Coderate von 2/3 ohne Punktierung erreichen?",
      "antwort": "Ohne Punktierung kann man direkt einen Faltungscodierer mit zwei Eingangsbits und drei Ausgangsbits verwenden. Dadurch werden aus k = 2 Informationsbits jeweils n = 3 Codebits erzeugt, sodass sich direkt die Coderate R = k/n = 2/3 ergibt."
    },
    {
      "thema": "Rayleigh-Fading",
      "frage": "Was ist Rayleigh-Fading?",
      "antwort": "Rayleigh-Fading beschreibt eine Mehrwegeausbreitung ohne dominanten direkten Sichtweg, bei der sich viele reflektierte Signalanteile überlagern und dadurch die Empfangsamplitude stark schwankt."
    },
    {
      "thema": "Rice-Fading",
      "frage": "Was ist Rice-Fading?",
      "antwort": "Rice-Fading beschreibt eine Mehrwegeausbreitung, bei der neben den reflektierten Signalanteilen ein dominanter direkter Sichtweg zwischen Sender und Empfänger vorhanden ist."
    },
    {
      "thema": "Rayleigh vs. Rice",
      "frage": "Was sind die Unterschiede zwischen Rayleigh-Fading und Rice-Fading?",
      "antwort": `Beispiel:
  	Du befindest dich mit deinem Handy in einem Gebäude und hast keine direkte Sicht zur Mobilfunkantenne. Das Signal erreicht dich hauptsächlich über Reflexionen → Rayleigh-Fading.

    Stehst du dagegen im Freien mit direkter Sicht auf die Mobilfunkantenne, gibt es einen starken direkten Signalweg zusätzlich zu Reflexionen → Rice-Fading.`
    }
  ],
  [
    {
      "thema": "Nyquist-Filter",
      "frage": "Was versteht man unter einem Nyquist-Filter und warum ist er wichtig in der Basisbandübertragung?",
      "antwort": "Ein Nyquist-Filter ist ein Filter, dessen Impulsantwort so gestaltet ist, dass sich die übertragenen Symbole zum Abtastzeitpunkt nicht gegenseitig beeinflussen. Dadurch wird Intersymbolinterferenz (ISI) vermieden und eine fehlerfreie Symbolentscheidung ermöglicht."
    },
    {
      "thema": "RRC-Aufteilung",
      "frage": "Warum wird das Raised-Cosine-Filter in zwei Root-Raised-Cosine-Filter aufgeteilt?",
      "antwort": "Das Raised-Cosine-Filter wird in zwei Root-Raised-Cosine-Filter aufgeteilt, damit ein Filter beim Sender und ein Filter beim Empfänger eingesetzt werden kann und sich beide zusammen zu einem Raised-Cosine-Filter ergänzen. Dadurch wird das Signal bandbegrenzt und gleichzeitig Intersymbolinterferenz (ISI) vermieden."
    },
    {
      "thema": "Faltung im Frequenzbereich",
      "frage": "Wie funktioniert die Faltung im Frequenzbereich und was bedeutet das für die Modulation?",
      "antwort": `Bei der Faltung im Zeitbereich werden zwei Signale miteinander verknüpft, wobei die Faltung im Frequenzbereich einer Multiplikation der jeweiligen Frequenzspektren entspricht. Für die Modulation bedeutet dies, dass durch die Multiplikation des Basisbandsignals mit einem Trägersignal dessen Spektrum in den Bereich der Trägerfrequenz verschoben wird, wodurch aus dem ursprünglichen Basisbandsignal ein Bandpasssignal entsteht.`
    },
    {
      "thema": "AM",
      "frage": "Erklären Sie das Prinzip der Amplitudenmodulation (AM).",
      "antwort": "Bei der Amplitudenmodulation (AM) wird die Amplitude eines hochfrequenten Trägersignals entsprechend dem Verlauf des Nachrichtensignals verändert, während die Trägerfrequenz und die Phase im Idealfall konstant bleiben. Dadurch wird das Nachrichtensignal auf den Träger aufmoduliert und kann als Bandpasssignal übertragen werden."
    },
    {
      "thema": "Spektrumsverschiebung",
      "frage": "Was passiert mit dem Spektrum, wenn ein Signal mit einer Cosinus-Schwingung multipliziert wird?",
      "antwort": "Wird ein Signal mit einer Cosinus-Schwingung multipliziert, wird sein Spektrum jeweils um die positive und negative Trägerfrequenz verschoben, wodurch zwei spektrale Kopien des ursprünglichen Signals entstehen."
    },
    {
      "thema": "Konjugiert-symmetrisches Spektrum",
      "frage": "Das Spektrum eines reellen Signals ist konjugiert-symmetrisch, damit sich die imaginären Anteile der positiven und negativen Frequenzkomponenten gegenseitig aufheben und nach der Rücktransformation wieder ein reelles Signal entsteht.",
      "antwort": "Das Spektrum eines reellen Signals ist konjugiert-symmetrisch, damit sich die imaginären Anteile der positiven und negativen Frequenzkomponenten gegenseitig aufheben und nach der Rücktransformation wieder ein reelles Signal entsteht."
    },
    {
      "thema": "Quadraturmodulation",
      "frage": "Was versteht man unter Quadraturmodulation und warum wird sie eingesetzt?",
      "antwort": "Unter Quadraturmodulation versteht man ein Modulationsverfahren, bei dem zwei voneinander unabhängige Signalanteile, der In-Phase-Anteil (I) und der um 90° phasenverschobene Quadratur-Anteil (Q), gleichzeitig auf zwei orthogonale Trägersignale moduliert und anschließend zu einem gemeinsamen Signal zusammengefasst werden. Sie wird eingesetzt, um mehr Informationen gleichzeitig über dieselbe Trägerfrequenz zu übertragen und digitale Modulationsverfahren wie QPSK oder QAM zu ermöglichen."
    },
    {
      "thema": "Kohärente Demodulation",
      "frage": "Was bedeutet „kohärente Demodulation“ und wann ist sie notwendig?",
      "antwort": "Kohärente Demodulation bedeutet, dass der Empfänger eine Referenzphase des Trägers benötigt und sein lokales Trägersignal in Frequenz und Phase möglichst genau mit dem Trägersignal des Senders synchronisiert. Sie ist notwendig, wenn die Information in der Phase und/oder Amplitude des Signals enthalten ist, beispielsweise bei PSK oder QAM."
    },
    {
      "thema": "Synchrone Demodulation",
      "frage": "Wie funktioniert die synchrone Demodulation im Zeit- und Frequenzbereich?",
      "antwort": "Bei der synchronen Demodulation wird das modulierte Empfangssignal im Zeitbereich mit einem lokalen Trägersignal gleicher Frequenz und Referenzphase multipliziert, wodurch ein Anteil des ursprünglichen Nachrichtensignals sowie ein hochfrequenter Anteil entstehen, der anschließend durch einen Tiefpassfilter entfernt wird."
    },
    {
      "thema": "Tiefpassfilter",
      "frage": "Welche Rolle spielt der Tiefpassfilter nach der Demodulation?",
      "antwort": "Bei der synchronen Demodulation wird im Zeitbereich das Empfangssignal mit einem lokalen Träger multipliziert. Im Frequenzbereich führt dies dazu, dass sich die im Empfangssignal enthaltenen Frequenzanteile verschieben und sowohl ein gewünschter niederfrequenter als auch ein unerwünschter hochfrequenter Anteil entsteht, wobei der gewünschte Anteil durch einen Tiefpass herausgefiltert wird."
    },
    {
      "thema": "IQ-Demodulation",
      "frage": "Welche Vorteile bietet die IQ-Demodulation?",
      "antwort": "Die IQ-Demodulation ermöglicht die gleichzeitige und getrennte Demodulation des In-Phase-Anteils (I) und des um 90° phasenverschobenen Quadratur-Anteils (Q). Dadurch können Amplitude und Phase eines Signals vollständig bestimmt und komplexe Modulationsverfahren wie QPSK und QAM demoduliert werden."
    },
    {
      "thema": "Frequenzmodulation",
      "frage": "Wie funktioniert die Frequenzmodulation mathematisch?",
      "antwort": "Bei der Frequenzmodulation bestimmt das Nachrichtensignal die momentane Frequenz des Trägers. Da die Frequenz angibt, wie schnell sich die Phase über die Zeit ändert, wird das Nachrichtensignal integriert, um die daraus entstehende Phasenänderung zu bestimmen, mit der anschließend der zeitliche Verlauf des FM-Signals beschrieben wird."
    },
    {
      "thema": "FM & LTI",
      "frage": "Welche Vorteile bietet die Frequenzmodulation gegenüber AM?",
      "antwort": "FM ist kein LTI-System, weil die Ausgangsgröße nicht linear vom Eingangssignal abhängt: Das Nachrichtensignal verändert die Frequenz bzw. die Phase innerhalb einer Cosinusfunktion, sodass das Superpositionsprinzip nicht erfüllt ist."
    },
    {
      "thema": "FM vs. AM",
      "frage": "Welche Vorteile bietet die Frequenzmodulation gegenüber AM?",
      "antwort": "Die Frequenzmodulation (FM) bietet gegenüber der Amplitudenmodulation (AM) den Vorteil, dass sie weniger empfindlich gegenüber Amplitudenstörungen und Rauschen ist, da die Information in der Frequenz und nicht in der Amplitude übertragen wird. Dadurch kann bei FM eine bessere Übertragungsqualität erreicht werden."
    },
    {
      "thema": "FM-Spektrum",
      "frage": "Warum kann FM trotz theoretisch unendlichem Spektrum praktisch eingesetzt werden?",
      "antwort": "FM hat theoretisch ein unendliches Spektrum, weil durch die Modulation sehr viele Seitenbänder entstehen. Praktisch werden jedoch die weiter außen liegenden Seitenbänder immer schwächer und enthalten nur noch wenig Leistung. Deshalb kann man sich auf die wesentlichen Frequenzanteile beschränken und das FM-Signal mit einer begrenzten Bandbreite übertragen."
    },
    {
      "thema": "Komplexes Basisband",
      "frage": "Was ist das komplexe Basisbandmodell und warum wird es in Simulationen bevorzugt?",
      "antwort": `Das komplexe Basisbandmodell beschreibt ein Bandpasssignal durch ein komplexes Signal mit einem Realteil (I) und einem Imaginärteil (Q). Dadurch können die Informationen über Amplitude und Phase des ursprünglichen Bandpasssignals dargestellt werden, ohne den hochfrequenten Träger selbst simulieren zu müssen.
      
      Es wird in Simulationen bevorzugt, weil nur das komplexe Basisbandsignal verarbeitet werden muss und dadurch geringere Abtastraten und weniger Rechenaufwand erforderlich sind.`
    },
    {
      "thema": "Digitales Übertragungssystem",
      "frage": "Wie wird ein digitales Übertragungssystem im Blockschaltbild dargestellt?",
      antwortBild: "Blockschaltbild.png"
    },
    {
      "thema": "Basisband-Simulation",
      "frage": "Welche Vorteile bietet die Simulation im komplexen Basisband gegenüber einer Simulation im realen Bandpassbereich?",
      "antwort": "Die Simulation im komplexen Basisband bietet gegenüber einer Simulation im realen Bandpassbereich den Vorteil, dass der hochfrequente Träger nicht mit simuliert werden muss. Dadurch sind geringere Abtastraten, weniger Datenpunkte und somit ein deutlich geringerer Rechenaufwand erforderlich, während die für die Übertragung wichtigen Informationen über Amplitude und Phase weiterhin durch die I- und Q-Komponenten erhalten bleiben."
    },
    {
      "thema": "Symbolmapping",
      "frage": "Wie funktioniert das Symbolmapping bei BPSK, QPSK und QAM?",
      "antwort": `Beim Symbolmapping werden mehrere Bits jeweils einem bestimmten Symbol bzw. Punkt in einem Signalraumdiagramm (Konstellationsdiagramm) zugeordnet.

BPSK: Ein Bit wird auf eines von zwei Symbolen abgebildet, beispielsweise 0 → +1 und 1 → −1. Die beiden Symbole unterscheiden sich durch ihre Phase um 180°.
QPSK: Je zwei Bits werden einem von vier Symbolen zugeordnet. Die vier Symbole besitzen unterschiedliche Phasen, beispielsweise 45°, 135°, 225° und 315°.
QAM: Mehrere Bits werden einem Punkt im I-Q-Diagramm zugeordnet. Dabei unterscheiden sich die Symbole sowohl in ihrer Amplitude als auch in ihrer Phase.`
    },
    {
      "thema": "Gray-Code",
      "frage": "Was ist ein Gray-Code und warum wird er verwendet?",
      "antwort": "Ein Gray-Code ist eine Bitzuordnung, bei der sich zwei benachbarte Symbole nur in einem einzigen Bit unterscheiden. Er wird beim Symbolmapping verwendet, damit bei einer fehlerhaften Entscheidung für ein benachbartes Symbol möglichst nur ein Bitfehler statt mehrerer Bitfehler entsteht."
    },
    {
      "thema": "16-QAM vs. 64-QAM",
      "frage": "Wie unterscheiden sich 16-QAM und 64-QAM in der Symbolzuordnung?",
      "antwort": `Bei der Symbolzuordnung unterscheiden sich 16-QAM und 64-QAM hauptsächlich in der Anzahl der verwendeten Symbole:

Bei 16-QAM werden 4 Bit pro Symbol auf einen von 16 Konstellationspunkten abgebildet.
Bei 64-QAM werden 6 Bit pro Symbol auf einen von 64 Konstellationspunkten abgebildet.

Da bei 64-QAM mehr Konstellationspunkte im gleichen Signalraum untergebracht werden, liegen diese näher beieinander. Dadurch kann 64-QAM mehr Daten übertragen, ist aber empfindlicher gegenüber Störungen und Rauschen.`
    },
    {
      "thema": "Decision Boundaries",
      "frage": "Was bedeutet „Decision Boundaries in Symbol Space“ (DUB-S)?",
      "antwort": "„Decision Boundaries in Symbol Space“ (Entscheidungsgrenzen im Symbolraum) sind die Grenzen zwischen den einzelnen Symbolbereichen eines Konstellationsdiagramms. Sie legen fest, welchem Symbol ein empfangener Punkt zugeordnet wird: Der Empfänger entscheidet sich normalerweise für das Symbol bzw. den Konstellationspunkt, zu dem der empfangene Punkt den geringsten Abstand hat."
    },
    {
      "thema": "Maximum Likelihood",
      "frage": "Wie arbeitet ein Maximum-Likelihood-Detektor?",
      "antwort": "Der Maximum-Likelihood-Detektor wählt das mögliche Sendesymbol mit dem kleinsten Abstand zum empfangenen Symbol. Mathematisch gilt: ŝ = s mit ||s_empf − s||² minimal. Dadurch ist die Entscheidung sehr genau, allerdings müssen die Abstände zu allen möglichen Sendesymbolen berechnet und verglichen werden, was einen hohen Rechenaufwand verursacht."
    },
    {
      "thema": "Symbolentscheidung",
      "frage": "Wie wird beim Demodulator das empfangene Symbol ausgewählt?",
      "antwort": "Beim Demodulator wird das empfangene Symbol mit den möglichen Konstellationspunkten verglichen und demjenigen Symbol zugeordnet, zu dem der Abstand am kleinsten ist."
    },
    {
      "thema": "Symbol- vs. Bitdetektion",
      "frage": "Was ist der Unterschied zwischen symbolweiser und bitweiser Detektion?",
      "antwort": "Bei der symbolweisen Detektion wird zunächst das gesamte empfangene Symbol ausgewertet und einem Konstellationspunkt zugeordnet; daraus ergibt sich anschließend die zugehörige Bitfolge. Bei der bitweisen Detektion wird dagegen jedes Bit der empfangenen Bitfolge einzeln anhand seiner Wahrscheinlichkeit für 0 oder 1 bewertet. Dadurch können beispielsweise Softbits bzw. LLR-Werte für die anschließende Kanaldecodierung verwendet werden."
    },
    {
      "thema": "Softbits",
      "frage": "Erklären Sie den Begriff „Softbits“.",
      "antwort": "Softbits sind keine festen 0- oder 1-Entscheidungen, sondern enthalten zusätzlich eine Information darüber, wie sicher die Entscheidung ist. Sie werden beispielsweise über den Log-Likelihood-Ratio (LLR) dargestellt: Der Betrag gibt die Zuverlässigkeit an, das Vorzeichen die wahrscheinliche Bitentscheidung. Dadurch kann der Kanaldecoder die Zuverlässigkeit einzelner Bits berücksichtigen und die Fehlerkorrektur verbessern."
    },
    {
      "thema": "LLR",
      "frage": "Wie wird der Log-Likelihood-Ratio (LLR) berechnet und interpretiert?",
      "antwort": `Der LLR (Log-Likelihood-Ratio) wird als Verhältnis der Wahrscheinlichkeiten berechnet, dass das empfangene Signal zu einer 1 bzw. zu einer 0 gehört:

Dabei gilt:

LLR = ln(p0(r) / p1(r))

LLR > 0: Eine 1 ist wahrscheinlicher.
LLR < 0: Eine 0 ist wahrscheinlicher.
|LLR| groß: Die Entscheidung ist sehr zuverlässig.
|LLR| klein: Die Entscheidung ist unsicher.

Damit liefert der LLR nicht nur die Bitentscheidung, sondern auch deren Zuverlässigkeit.`
    },
    {
      "thema": "Faltungskodierer",
      "frage": "Wie funktioniert ein Faltungskodierer?",
      "antwort": "Ein Faltungscodierer fügt einem Datenstrom gezielt Redundanz hinzu, um Übertragungsfehler später korrigieren zu können. Dabei werden die aktuellen Eingangsbits zusammen mit zuvor gespeicherten Bits aus einem Schieberegister über XOR-Verknüpfungen verarbeitet. Aus diesen Bits entstehen mehrere Ausgangsbits, deren Anzahl durch die Coderate bestimmt wird."
    },
    {
      "thema": "Trellisdiagramm",
      "frage": "Was ist ein Trellisdiagramm und wie wird es genutzt?",
      "antwort": `Ein Trellisdiagramm stellt die möglichen Zustände eines Faltungscodierers über die Zeit dar. Es zeigt, von welchem aktuellen Zustand bei einem bestimmten Eingangsbit in welchen neuen Zustand gewechselt wird und welche Ausgangsbits dabei entstehen.

Der Viterbi-Decoder nutzt das Trellisdiagramm, um aus den möglichen Pfaden den wahrscheinlichsten Pfad zu bestimmen und damit die ursprünglich gesendeten Bits zu rekonstruieren.`
    },
    {
      "thema": "Viterbi-Algorithmus",
      "frage": "Wie funktioniert der Viterbi-Algorithmus?",
      "antwort": "Der Viterbi-Algorithmus nutzt das Trellisdiagramm, um aus allen möglichen Zustandsübergängen den wahrscheinlichsten Pfad zu bestimmen. Dazu werden für jeden möglichen Pfad die Pfadmetriken berechnet und bei jedem Zustand nur der Pfad mit der besten Metrik behalten. Am Ende wird der beste Pfad zurückverfolgt (Traceback), wodurch die wahrscheinlichste Folge der ursprünglich gesendeten Bits rekonstruiert wird."
    },
    {
      "thema": "Trace-Back",
      "frage": "Was bedeutet „Full-Trace-Back“ und „Partial-Trace-Back“ beim Viterbi-Decoder?",
      "antwort": "Beim Full-Trace-Back wird der beste Pfad durch das gesamte Trellis bis zum Anfang zurückverfolgt. Beim Partial-Trace-Back wird dagegen nur ein begrenzter Abschnitt des Trellis zurückverfolgt. Da sich dabei nach einer gewissen Traceback-Länge mehrere mögliche Pfade zu einem gemeinsamen Pfad vereinigen, ist dieser gemeinsame Abschnitt bereits eindeutig und kann als korrekt decodiert ausgegeben werden, ohne das gesamte Trellis durchlaufen zu müssen."
    },
    {
      "thema": "Blockcode",
      "frage": "Was ist ein Blockcode und wie ist er aufgebaut?",
      "antwort": "Ein Blockcode unterteilt die zu übertragenden Daten in Blöcke mit einer festen Anzahl von Informationsbits und fügt jedem Block zusätzliche Redundanzbits hinzu. Dadurch entsteht ein Codewort mit fester Länge, das der Empfänger zur Fehlererkennung und gegebenenfalls Fehlerkorrektur verwendet."
    },
    {
      "thema": "Hamming-Distanz",
      "frage": "Wie bestimmt man die Hamming-Distanz und was bedeutet sie?",
      "antwort": "Die Hamming-Distanz zwischen zwei Codewörtern gibt an, an wie vielen Bitstellen sie sich unterscheiden. Man bestimmt sie, indem man die beiden Codewörter Bit für Bit vergleicht und die unterschiedlichen Stellen zählt."
    },
    {
      "thema": "Fehlererkennung/-korrektur",
      "frage": "Was ist der Unterschied zwischen Fehlererkennung und Fehlerkorrektur?",
      "antwort": `Bei der Fehlererkennung wird nur festgestellt, ob ein Fehler aufgetreten ist, während bei der Fehlerkorrektur zusätzlich das ursprünglich gesendete Codewort bestimmt und der Fehler dadurch korrigiert wird.
      
      Bei einer Hamming-Distanz h können 
      e Bit-Fehler korrigiert werden wenn gilt: h >= 2e+1 also e <= h-1/2
      p Bit-Fehler erkannt werden, wenn gilt h >= f+1 also f <= h-1`
    },
    {
      "thema": "Reed-Solomon-Code",
      "frage": "Wie funktioniert ein Reed-Solomon-Code?",
      "antwort": "Ein Reed-Solomon-Code ist ein Blockcode, der aus mehreren Nutzsymbolen zusätzliche Prüfsymbole erzeugt. Diese Redundanz wird mathematisch aus den Nutzdaten gebildet und ermöglicht es dem Empfänger, fehlerhafte Symbole zu erkennen und abhängig von der Anzahl der Prüfsymbole auch zu korrigieren. Da Reed-Solomon mit Symbolen aus mehreren Bits arbeitet, eignet er sich besonders gut zur Korrektur von Bündelfehlern."
    },
    {
      "thema": "Punktierung",
      "frage": "Was ist Punktierung und wie beeinflusst sie die Coderate?",
      "antwort": "Bei der Punktierung werden gezielt erzeugte Codebits nicht übertragen. Dadurch steigt die Coderate, aber die Redundanz und damit der Fehlerschutz nehmen ab."
    },
    {
      "thema": "Punktierte Bits",
      "frage": "Wie funktioniert die Wiederherstellung punktierter Bits im Empfänger?",
      "antwort": "Bei der Wiederherstellung punktierter Bits im Empfänger werden die nicht übertragenen Bits durch Dummybits mit einem LLR von 0 ersetzt, da für diese Bits keine Information über den Bitwert oder dessen Zuverlässigkeit vorliegt."
    },
    {
      "thema": "Synchronisationsarten",
      "frage": "Welche Arten der Synchronisation sind in der Nachrichtentechnik relevant?",
      "antwort": "In der Nachrichtentechnik sind insbesondere die Zeit-, Frequenz- und Phasensynchronisation relevant, damit der Empfänger das Signal zum richtigen Zeitpunkt und mit der richtigen Frequenz und Phase auswerten kann."
    },
    {
      "thema": "Burst-Erkennung",
      "frage": "Wie funktioniert die Burst-Erkennung bei WLAN?",
      "antwort": "Bei WLAN funktioniert die Burst-Erkennung über die Short Training Sequence (STS) der Präambel. Da sich die STS periodisch wiederholt, korreliert der Empfänger das empfangene Signal mit einer zeitlich verzögerten Version. Bei einem hohen Korrelationswert erkennt der Empfänger, dass ein WLAN-Burst begonnen hat."
    },
    {
      "thema": "Korrelation",
      "frage": "Wie hilft die Korrelation bei der Frequenz- und Zeitsynchronisation?",
      "antwort": `Bei WLAN wird die Korrelation genutzt, weil sich die Short Training Sequence (STS) periodisch wiederholt. Die gleiche Sequenz erscheint dabei alle 16 Abtastwerte erneut.

Der Empfänger vergleicht deshalb das aktuell empfangene Signal mit dem Signal, das um 16 Abtastwerte verzögert ist. Passen beide gut zusammen, ist die Korrelation groß. Dadurch kann der Empfänger erkennen, dass ein WLAN-Burst beginnt und den richtigen Zeitpunkt bestimmen → Zeitsynchronisation.

Zusätzlich enthält die Korrelation eine Phaseninformation. Ein Frequenzversatz zwischen Sender und Empfänger führt dazu, dass zwischen zwei aufeinanderfolgenden STS-Wiederholungen eine Phasendifferenz entsteht. Aus dieser Phasendifferenz kann der Frequenzversatz bestimmt und korrigiert werden → Frequenzsynchronisation.`
    },
    {
      "thema": "Interleaving",
      "frage": "Warum wird Interleaving eingesetzt?",
      "antwort": `Interleaving wird eingesetzt, um zusammenhängende Fehler, sogenannte Burstfehler, über mehrere Codewörter bzw. Datenbereiche zu verteilen.

Dadurch werden aus einem langen Fehlerblock viele einzelne Fehler. Diese können von der anschließenden Fehlerkorrektur, zum Beispiel einem Reed-Solomon- oder Faltungscode, deutlich besser korrigiert werden.`
    },
    {
      "thema": "Block-Interleaver",
      "frage": "Wie funktioniert ein Block-Interleaver?",
      "antwort": "Ein Block-Interleaver schreibt die Daten zunächst zeilenweise in eine Matrix und liest sie anschließend spaltenweise wieder aus. Dadurch werden aufeinanderfolgende Bits im Datenstrom verteilt, sodass Burstfehler nach dem De-Interleaving auf einzelne Fehler verteilt werden und vom Fehlerkorrekturverfahren besser korrigiert werden können."
    },
    {
      "thema": "Energy Dispersal",
      "frage": "Was ist der Zweck des „Energy Dispersal“ Blocks im DVB-T?",
      "antwort": "Der „Energy Dispersal“-Block im DVB-T bricht lange konstante Bitfolgen, beispielsweise viele aufeinanderfolgende 0en, auf. Dadurch wird verhindert, dass über längere Zeit ein konstanter I- bzw. Q-Wert gesendet wird, und die Energie des Signals wird gleichmäßiger über das Spektrum verteilt."
    },
    {
      "thema": "DVB vs. WLAN Interleaving",
      "frage": "Wie unterscheidet sich das Interleaving bei DVB-T von dem bei WLAN?",
      "antwort": "Bei DVB-T wird Interleaving über längere Datenströme eingesetzt, um zusammenhängende Fehler durch Störungen oder Fading möglichst weit zu verteilen. Bei WLAN erfolgt das Interleaving dagegen paket- bzw. blockweise, da WLAN Daten in einzelnen Frames bzw. Bursts überträgt und nicht kontinuierlich wie ein Broadcastsystem."
    },
    {
      "thema": "CSMA/CD vs. CSMA/CA",
      "frage": "Was ist der Unterschied zwischen CSMA/CD und CSMA/CA?",
      "antwort": `CSMA/CD wird vor allem bei kabelgebundenen Netzwerken verwendet. Geräte erkennen dabei eine Kollision, nachdem sie passiert ist, und brechen die Übertragung ab.

CSMA/CA wird bei WLAN verwendet. Da Funkgeräte Kollisionen während des Sendens nicht zuverlässig erkennen können, versucht CSMA/CA Kollisionen vorher zu vermeiden, zum Beispiel durch einen Backoff-Timer.`
    },
    {
      "thema": "Kollisionserkennung",
      "frage": "Warum ist bei Funkkanälen keine Kollisionserkennung möglich?",
      "antwort": "Bei Funkkanälen ist keine zuverlässige Kollisionserkennung möglich, weil ein Gerät während des Sendens sein eigenes Signal sehr viel stärker empfängt als ein gleichzeitig eintreffendes Signal eines anderen Senders. Dadurch kann es eine mögliche Kollision nicht sicher erkennen. Deshalb verwendet WLAN CSMA/CA, also die Kollisionsvermeidung."
    },
    {
      "thema": "ARQ",
      "frage": "Was bedeutet ARQ und wie funktioniert es?",
      "antwort": "ARQ (Automatic Repeat Request) ist ein Verfahren zur Fehlerbehandlung, bei dem der Empfänger fehlerhafte Daten erkennt und dem Sender keine erfolgreiche Bestätigung gibt bzw. eine erneute Übertragung anfordert. Der Sender überträgt das fehlerhafte Datenpaket anschließend erneut."
    },
    {
      "thema": "Hybrid-ARQ",
      "frage": "Wie verbessert Hybrid-ARQ die Übertragungsqualität?",
      "antwort": "Hybrid-ARQ verbessert die Übertragungsqualität, indem fehlerhafte Pakete erneut übertragen und die dabei empfangenen Softbits kombiniert werden; entweder wird dabei das gleiche Paket erneut gesendet und die Softbits werden kombiniert (Chase Combining), oder es werden zusätzlich neue Redundanzinformationen übertragen, die der Empfänger zur verbesserten Fehlerkorrektur nutzt (Incremental Redundancy)."
    },
    {
      "thema": "Backoff-Timer",
      "frage": "Welche Rolle spielt der „Backoff-Timer“ im Medium Access?",
      "antwort": "Der Backoff-Timer sorgt beim Medium Access dafür, dass Stationen nach einem belegten Kanal oder einer Kollision nicht sofort gleichzeitig erneut senden. Jede Station wartet eine zufällig gewählte Zeit, bevor sie erneut versucht, auf das Übertragungsmedium zuzugreifen. Dadurch wird die Wahrscheinlichkeit weiterer Kollisionen verringert."
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
    frageButton.textContent = (index + 1) + ". " + (item.thema || "Frage");
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
