/* ============================================================
   HONORAIRES DU CABINET — le seul fichier à modifier pour vos prix.
   - Écrivez le prix entre les guillemets, par exemple : "90 €"
     ou "À partir de 120 €" ou "Sur devis".
   - Laissez "" (vide) : aucune mention d'honoraires n'apparaît sur la page.
   - Ne touchez pas aux noms à gauche (ils correspondent aux pages).
   - Après modification, envoyez uniquement ce fichier sur GitHub.
   ============================================================ */
window.HONORAIRES_NOTE = ""; /* Phrase optionnelle sous chaque prix, ex. : "Hors droits et taxes de l'administration." */
window.HONORAIRES = {
  /* ANTS — Véhicules France */
  "ants-changement-adresse": "",
  "ants-changement-titulaire": "",
  "ants-coc": "",
  "ants-collection": "",
  "ants-csa-fiv": "",
  "ants-diplomatiques": "",
  "ants-duplicata": "",
  "ants-import-hors-ue": "",
  "ants-import-ue": "",
  "ants-levee-gage": "",
  "ants-mandat": "",
  "ants-modification-technique": "",
  "ants-neuf": "",
  "ants-non-gage": "",
  "ants-occasion": "",
  "ants-permis": "",
  "ants-pose-plaque": "",
  "ants-professionnels": "",
  "ants-rectification": "",
  "ants-situation-titulaire": "",
  "ants-situation-vehicule": "",
  /* Maritime France */
  "mf-domiciliation": "",
  "mf-licence-radio": "",
  "mf-mutation": "",
  "mf-neuf": "",
  "mf-occasion": "",
  "mf-quitus-fiscal": "",
  "mf-remotorisation": "",
  /* Maritime Monaco */
  "mm-duplicata": "",
  "mm-heliport": "",
  "mm-licence-radio": "",
  "mm-neuf": "",
  "mm-occasion": "",
  "mm-permis": "",
  "mm-securite": "",
  "mm-vente": "",
  /* STC — Véhicules Monaco */
  "stc-dispositions": "",
  "stc-estampille": "",
  "stc-gage": "",
  "stc-grande-remise": "",
  "stc-immatriculation-provisoire": "",
  "stc-location": "",
  "stc-modification-vehicule": "",
  "stc-moto-a-la-demande": "",
  "stc-neuf": "",
  "stc-occasion": "",
  "stc-permis-echange": "",
  "stc-permis-examen": "",
  "stc-permis-international": "",
  "stc-permis-perte-vol": "",
  "stc-permis-renouvellement": "",
  "stc-perte-vol": "",
  "stc-pose-plaque": "",
  "stc-professionnels-automobile": "",
  "stc-remorque": "",
  "stc-remplacement": "",
  "stc-series-speciales": "",
  "stc-sortie-fichier": "",
  "stc-taxi": "",
  "stc-transport-sanitaire": ""
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
        if (n && window.HONORAIRES_NOTE) n.textContent = window.HONORAIRES_NOTE;
        els[i].hidden = false;
      }
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
