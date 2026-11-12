/* Marir Service Admin — tariffe (versione italiana). */
window.HONORAIRES_NOTE = "Esclusi diritti e tasse dell'amministrazione."; /* Phrase optionnelle sous chaque prix, ex. : "Esclusi diritti e tasse dell'amministrazione." */
window.HONORAIRES_NOTES = {
  "stc-pose-plaque": "Escluso il costo delle targhe.",
  "ants-pose-plaque": "Escluso il costo delle targhe.",
  "ants-import-ue": "Attestato fiscale IVA (quitus fiscal) incluso. Esclusi diritti e tasse dell'amministrazione.",
  "ants-import-hors-ue": "Conformità DREAL inclusa. Esclusi diritti e tasse dell'amministrazione.",
  "ants-collection": "Pratica FFVE (attestato di veicolo da collezione) inclusa. Esclusi diritti e tasse dell'amministrazione.",
  "ants-coc": "Escluso il prezzo del certificato di conformità.",
  "ants-permis": "In caso di smarrimento: marca da bollo di 25 € in più. Esclusi diritti e tasse dell'amministrazione."
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
  "ants-professionnels": "Su richiesta",
  "ants-rectification": "49 €",
  "ants-situation-titulaire": "49 €",
  "ants-situation-vehicule": "49 €",
  /* Maritime France */
  "mf-licence-radio": "Da 119 €",
  "mf-mutation": "Da 119 €",
  "mf-vente": "Da 119 €",
  "mf-duplicata": "Da 119 €",
  "mf-neuf": "Da 119 €",
  "mf-occasion": "Su preventivo",
  "mf-quitus-fiscal": "Su preventivo",
  "mf-remotorisation": "Da 119 €",
  /* Maritime Monaco */
  "mm-duplicata": "Da 119 €",
  "mm-licence-radio": "Da 119 €",
  "mm-modification": "Su preventivo",
  "mm-neuf": "Da 119 €",
  "mm-occasion": "Da 119 €",
  "mm-permis": "Da 119 €",
  "mm-securite": "",
  "mm-vente": "Da 119 €",
  /* STC — Véhicules Monaco */
  "stc-dispositions": "",
  "stc-estampille": "Da 199 €",
  "stc-gage": "Da 199 €",
  "stc-grande-remise": "Su preventivo",
  "stc-immatriculation-provisoire": "Da 199 €",
  "stc-location": "Da 199 €",
  "stc-modification-vehicule": "Da 199 €",
  "stc-moto-a-la-demande": "Da 199 €",
  "stc-neuf": "Da 199 €",
  "stc-occasion": "Da 199 €",
  "stc-permis-echange": "Da 199 €",
  "stc-permis-examen": "Da 199 €",
  "stc-permis-international": "Da 199 €",
  "stc-permis-perte-vol": "Da 199 €",
  "stc-permis-renouvellement": "Da 199 €",
  "stc-perte-vol": "Da 199 €",
  "stc-pose-plaque": "49 €",
  "stc-professionnels-automobile": "Su richiesta",
  "stc-remorque": "Da 199 €",
  "stc-remplacement": "Da 199 €",
  "stc-series-speciales": "Su preventivo",
  "stc-sortie-fichier": "Da 199 €",
  "stc-taxi": "Su preventivo",
  "stc-transport-sanitaire": "Su preventivo"
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
