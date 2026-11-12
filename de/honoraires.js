/* Marir Service Admin — Honorare (deutsche Version). */
window.HONORAIRES_NOTE = "Ohne Gebühren und Steuern der Behörde."; /* Phrase optionnelle sous chaque prix, ex. : "Ohne Gebühren und Steuern der Behörde." */
window.HONORAIRES_NOTES = {
  "stc-pose-plaque": "Ohne Kosten der Kennzeichen.",
  "ants-pose-plaque": "Ohne Kosten der Kennzeichen.",
  "ants-import-ue": "Mehrwertsteuer-Unbedenklichkeitsbescheinigung (quitus fiscal) inbegriffen. Ohne Gebühren und Steuern der Behörde.",
  "ants-import-hors-ue": "DREAL-Konformität inbegriffen. Ohne Gebühren und Steuern der Behörde.",
  "ants-collection": "FFVE-Akte (Sammlerfahrzeug-Bescheinigung) inbegriffen. Ohne Gebühren und Steuern der Behörde.",
  "ants-coc": "Ohne Preis der Übereinstimmungsbescheinigung.",
  "ants-permis": "Bei Verlust: zusätzlich 25 € Steuermarke. Ohne Gebühren und Steuern der Behörde."
};
window.HONORAIRES = {
  /* ANTS — Véhicules France */
  "ants-changement-adresse": "29 €",
  "ants-changement-titulaire": "49 €",
  "ants-coc": "79 €",
  "ants-collection": "169 €",
  "ants-csa-fiv": "49 €",
  "ants-diplomatiques": "49 €",
  "ants-duplicata": "39 €",
  "ants-import-hors-ue": "169 €",
  "ants-import-ue": "149 €",
  "ants-levee-gage": "19 €",
  "ants-modification-technique": "49 €",
  "ants-neuf": "49 €",
  "ants-non-gage": "19 €",
  "ants-occasion": "49 €",
  "ants-permis": "65 €",
  "ants-pose-plaque": "49 €",
  "ants-provenance-monaco": "99 €",
  "ants-quitus-fiscal": "49 €",
  "ants-ww-particuliers": "119 €",
  "ants-professionnels": "Auf Anfrage",
  "ants-rectification": "49 €",
  "ants-situation-titulaire": "49 €",
  "ants-situation-vehicule": "49 €",
  /* Maritime France */
  "mf-licence-radio": "Ab 119 €",
  "mf-mutation": "Ab 119 €",
  "mf-vente": "Ab 119 €",
  "mf-duplicata": "Ab 119 €",
  "mf-neuf": "Ab 119 €",
  "mf-occasion": "Nach Angebot",
  "mf-quitus-fiscal": "Nach Angebot",
  "mf-remotorisation": "Ab 119 €",
  /* Maritime Monaco */
  "mm-duplicata": "Ab 119 €",
  "mm-licence-radio": "Ab 119 €",
  "mm-modification": "Nach Angebot",
  "mm-neuf": "Ab 119 €",
  "mm-occasion": "Ab 119 €",
  "mm-permis": "Ab 119 €",
  "mm-securite": "",
  "mm-vente": "Ab 119 €",
  /* STC — Véhicules Monaco */
  "stc-dispositions": "",
  "stc-estampille": "Ab 199 €",
  "stc-gage": "Ab 199 €",
  "stc-grande-remise": "Nach Angebot",
  "stc-immatriculation-provisoire": "Ab 199 €",
  "stc-location": "Ab 199 €",
  "stc-modification-vehicule": "Ab 199 €",
  "stc-moto-a-la-demande": "Ab 199 €",
  "stc-neuf": "Ab 199 €",
  "stc-occasion": "Ab 199 €",
  "stc-permis-echange": "Ab 199 €",
  "stc-permis-examen": "Ab 199 €",
  "stc-permis-international": "Ab 199 €",
  "stc-permis-perte-vol": "Ab 199 €",
  "stc-permis-renouvellement": "Ab 199 €",
  "stc-perte-vol": "Ab 199 €",
  "stc-pose-plaque": "49 €",
  "stc-professionnels-automobile": "Auf Anfrage",
  "stc-remorque": "Ab 199 €",
  "stc-remplacement": "Ab 199 €",
  "stc-series-speciales": "Nach Angebot",
  "stc-sortie-fichier": "Ab 199 €",
  "stc-taxi": "Nach Angebot",
  "stc-transport-sanitaire": "Nach Angebot"
};
(function () {
  var H = window.HONORAIRES || {};
  function run() {
    var els = document.querySelectorAll('[data-honoraires]');
    for (var i = 0; i < els.length; i++) {
      var v = H[els[i].getAttribute('data-honoraires')];
      if (typeof v === 'string' && v.replace(/\s/g, '') !== '') {
        els[i].querySelector('.hon-val').textContent = v;
        var n = els[i].querySelector('.hon-note');
        var key = els[i].getAttribute('data-honoraires');
        var N = window.HONORAIRES_NOTES || {};
        if (n && N[key]) n.textContent = N[key];
        else if (n && window.HONORAIRES_NOTE) n.textContent = window.HONORAIRES_NOTE;
        els[i].hidden = false;
      }
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
