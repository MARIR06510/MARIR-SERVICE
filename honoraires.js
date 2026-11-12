/* ============================================================
   HONORAIRES DU CABINET — le seul fichier à modifier pour vos prix.
   - Écrivez le prix entre les guillemets, par exemple : "90 €"
     ou "À partir de 120 €" ou "Sur devis".
   - Laissez "" (vide) : aucune mention d'honoraires n'apparaît sur la page.
   - Ne touchez pas aux noms à gauche (ils correspondent aux pages).
   - Après modification, envoyez uniquement ce fichier sur GitHub.
   ============================================================ */
window.HONORAIRES_NOTE = "Hors droits et taxes de l'administration."; /* Phrase optionnelle sous chaque prix, ex. : "Hors droits et taxes de l'administration." */
window.HONORAIRES_NOTES = {
  "stc-pose-plaque": "Hors coût des plaques.",
  "ants-pose-plaque": "Hors coût des plaques.",
  "ants-import-ue": "Quitus fiscal compris. Hors droits et taxes de l'administration.",
  "ants-import-hors-ue": "Conformité DREAL comprise. Hors droits et taxes de l'administration.",
  "ants-collection": "Dossier FFVE (attestation de véhicule de collection) compris. Hors droits et taxes de l'administration.",
  "ants-coc": "Hors prix du certificat de conformité.",
  "ants-permis": "En cas de perte : timbre fiscal de 25 € en sus. Hors droits et taxes de l'administration."
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
  "ants-professionnels": "Sur demande",
  "ants-rectification": "49 €",
  "ants-situation-titulaire": "49 €",
  "ants-situation-vehicule": "49 €",
  /* Maritime France */
  "mf-licence-radio": "À partir de 119 €",
  "mf-mutation": "À partir de 119 €",
  "mf-vente": "À partir de 119 €",
  "mf-duplicata": "À partir de 119 €",
  "mf-neuf": "À partir de 119 €",
  "mf-occasion": "Sur devis",
  "mf-quitus-fiscal": "Sur devis",
  "mf-remotorisation": "À partir de 119 €",
  /* Maritime Monaco */
  "mm-duplicata": "À partir de 119 €",
  "mm-licence-radio": "À partir de 119 €",
  "mm-modification": "Sur devis",
  "mm-neuf": "À partir de 119 €",
  "mm-occasion": "À partir de 119 €",
  "mm-permis": "À partir de 119 €",
  "mm-securite": "",
  "mm-vente": "À partir de 119 €",
  /* STC — Véhicules Monaco */
  "stc-dispositions": "",
  "stc-estampille": "À partir de 199 €",
  "stc-gage": "À partir de 199 €",
  "stc-grande-remise": "Sur devis",
  "stc-immatriculation-provisoire": "À partir de 199 €",
  "stc-location": "À partir de 199 €",
  "stc-modification-vehicule": "À partir de 199 €",
  "stc-moto-a-la-demande": "À partir de 199 €",
  "stc-neuf": "À partir de 199 €",
  "stc-occasion": "À partir de 199 €",
  "douane-846a": "À partir de 199 €",
  "tva-attestation": "À partir de 199 €",
  "stc-permis-echange": "À partir de 199 €",
  "stc-permis-examen": "À partir de 199 €",
  "stc-permis-international": "À partir de 199 €",
  "stc-permis-perte-vol": "À partir de 199 €",
  "stc-permis-renouvellement": "À partir de 199 €",
  "stc-perte-vol": "À partir de 199 €",
  "stc-pose-plaque": "49 €",
  "stc-professionnels-automobile": "Sur demande",
  "stc-remorque": "À partir de 199 €",
  "stc-remplacement": "À partir de 199 €",
  "stc-series-speciales": "Sur devis",
  "stc-sortie-fichier": "À partir de 199 €",
  "stc-taxi": "Sur devis",
  "stc-transport-sanitaire": "Sur devis"
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
