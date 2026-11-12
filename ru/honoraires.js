/* Marir Service Admin — тарифы (русская версия). */
window.HONORAIRES_NOTE = "Без учёта пошлин и налогов администрации."; /* Phrase optionnelle sous chaque prix, ex. : "Без учёта пошлин и налогов администрации." */
window.HONORAIRES_NOTES = {
  "stc-pose-plaque": "Без учёта стоимости регистрационных номеров.",
  "ants-pose-plaque": "Без учёта стоимости регистрационных номеров.",
  "ants-import-ue": "Включая налоговую справку об уплате НДС (quitus fiscal). Без учёта пошлин и налогов администрации.",
  "ants-import-hors-ue": "Включая проверку соответствия DREAL. Без учёта пошлин и налогов администрации.",
  "ants-collection": "Включая досье FFVE (справка о коллекционном транспортном средстве). Без учёта пошлин и налогов администрации.",
  "ants-coc": "Без учёта стоимости сертификата соответствия.",
  "ants-permis": "В случае утраты: дополнительно гербовый сбор 25 €. Без учёта пошлин и налогов администрации."
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
  "ants-professionnels": "По запросу",
  "ants-rectification": "49 €",
  "ants-situation-titulaire": "49 €",
  "ants-situation-vehicule": "49 €",
  /* Maritime France */
  "mf-licence-radio": "от 119 €",
  "mf-mutation": "от 119 €",
  "mf-vente": "от 119 €",
  "mf-duplicata": "от 119 €",
  "mf-neuf": "от 119 €",
  "mf-occasion": "Индивидуальный расчёт",
  "mf-quitus-fiscal": "Индивидуальный расчёт",
  "mf-remotorisation": "от 119 €",
  /* Maritime Monaco */
  "mm-duplicata": "от 119 €",
  "mm-licence-radio": "от 119 €",
  "mm-modification": "Индивидуальный расчёт",
  "mm-neuf": "от 119 €",
  "mm-occasion": "от 119 €",
  "mm-permis": "от 119 €",
  "mm-securite": "",
  "mm-vente": "от 119 €",
  /* STC — Véhicules Monaco */
  "stc-dispositions": "",
  "stc-estampille": "от 199 €",
  "stc-gage": "от 199 €",
  "stc-grande-remise": "Индивидуальный расчёт",
  "stc-immatriculation-provisoire": "от 199 €",
  "stc-location": "от 199 €",
  "stc-modification-vehicule": "от 199 €",
  "stc-moto-a-la-demande": "от 199 €",
  "stc-neuf": "от 199 €",
  "stc-occasion": "от 199 €",
  "douane-846a": "от 199 €",
  "tva-attestation": "от 199 €",
  "stc-permis-echange": "от 199 €",
  "stc-permis-examen": "от 199 €",
  "stc-permis-international": "от 199 €",
  "stc-permis-perte-vol": "от 199 €",
  "stc-permis-renouvellement": "от 199 €",
  "stc-perte-vol": "от 199 €",
  "stc-pose-plaque": "49 €",
  "stc-professionnels-automobile": "По запросу",
  "stc-remorque": "от 199 €",
  "stc-remplacement": "от 199 €",
  "stc-series-speciales": "Индивидуальный расчёт",
  "stc-sortie-fichier": "от 199 €",
  "stc-taxi": "Индивидуальный расчёт",
  "stc-transport-sanitaire": "Индивидуальный расчёт"
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
