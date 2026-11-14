/* Marir Service Admin — fees (English version). */
window.HONORAIRES_NOTE = "Excluding administrative duties and taxes."; /* Phrase optionnelle sous chaque prix, ex. : "Excluding administrative duties and taxes." */
window.HONORAIRES_NOTES = {
  "stc-pose-plaque": "Excluding the cost of the plates.",
  "ants-pose-plaque": "Excluding the cost of the plates.",
  "ants-import-ue": "Tax clearance (quitus fiscal) included. Excluding administrative duties and taxes.",
  "ants-import-hors-ue": "DREAL conformity included. Excluding administrative duties and taxes.",
  "ants-collection": "FFVE file (classic/collector vehicle attestation) included. Excluding administrative duties and taxes.",
  "ants-coc": "Excluding the price of the certificate of conformity.",
  "ants-permis": "If lost: additional €25 tax stamp. Excluding administrative duties and taxes."
};
window.HONORAIRES = {
  /* ANTS — Véhicules France */
  "ants-changement-adresse": "€29",
  "ants-changement-titulaire": "€49",
  "ants-coc": "€79",
  "ants-collection": "€169",
  "ants-csa-fiv": "€49",
  "ants-diplomatiques": "€49",
  "ants-duplicata": "€39",
  "ants-import-hors-ue": "€169",
  "ants-import-ue": "€149",
  "ants-levee-gage": "€19",
  "ants-modification-technique": "€49",
  "ants-neuf": "€49",
  "ants-non-gage": "€19",
  "ants-occasion": "€49",
  "ants-permis": "€65",
  "ants-pose-plaque": "€49",
  "ants-provenance-monaco": "€99",
  "ants-quitus-fiscal": "€49",
  "ants-ww-particuliers": "€119",
  "ants-professionnels": "On request",
  "ants-rectification": "€49",
  "ants-situation-titulaire": "€49",
  "ants-situation-vehicule": "€49",
  /* Maritime France */
  "mf-licence-radio": "From €119",
  "mf-mutation": "From €119",
  "mf-vente": "From €119",
  "mf-duplicata": "From €119",
  "mf-neuf": "From €119",
  "mf-occasion": "Quote on request",
  "mf-quitus-fiscal": "Quote on request",
  "mf-remotorisation": "From €119",
  /* Maritime Monaco */
  "mm-duplicata": "From €199",
  "mm-licence-radio": "From €199",
  "mm-modification": "Quote on request",
  "mm-neuf": "From €299",
  "mm-occasion": "From €299",
  "mm-permis": "From €199",
  "mm-securite": "",
  "mm-vente": "From €299",
  /* STC — Véhicules Monaco */
  "stc-dispositions": "",
  "stc-estampille": "From €199",
  "stc-gage": "From €199",
  "stc-grande-remise": "Quote on request",
  "stc-immatriculation-provisoire": "From €199",
  "stc-location": "From €199",
  "stc-modification-vehicule": "From €199",
  "stc-moto-a-la-demande": "From €199",
  "stc-neuf": "From €199",
  "stc-occasion": "From €199",
  "douane-846a": "From €199",
  "tva-attestation": "From €199",
  "stc-permis-echange": "From €199",
  "stc-permis-examen": "From €199",
  "stc-permis-international": "From €199",
  "stc-permis-perte-vol": "From €199",
  "stc-permis-renouvellement": "From €199",
  "stc-perte-vol": "From €199",
  "stc-pose-plaque": "€49",
  "stc-professionnels-automobile": "On request",
  "stc-remorque": "From €199",
  "stc-remplacement": "From €199",
  "stc-series-speciales": "Quote on request",
  "stc-sortie-fichier": "From €199",
  "stc-taxi": "Quote on request",
  "stc-transport-sanitaire": "Quote on request"
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
