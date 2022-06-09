import LocalizedStrings from "react-localization";

let strings = new LocalizedStrings({
  en: {
    about: {
      span: "Who are we",
      p1: "IHTPS",
      p2: "More than 75 years,",
      p3:
        "We have joined in our company men with several skills, thus accumulating more than 75 years of experience in the industrial environment, both in the creation of companies and factories and in the assembly of technological production lines. Faced with certain difficulties encountered, we quickly understood that at the beginning, help is precious and to succeed in your project, you must surround yourself with the right experts. Saving a few dollars of advice can be very expensive at the exit, especially in the choice of techniques and processes. And it is often too late. We work upstream of the project and downstream. One goal…. Run the production line at the best cost and the fastest. A common success",
    },
  },
  fr: {
    about: {
      span: "QUI NOUS SOMMES",
      p1: "IHTPS",
      p2: "Ainsi plus de 75,",
      p3: `Nous avons joint dans notre société de plusieurs compétences cumulant ainsi plus de 75 ans d'expériences en milieu industriel aussi bien création de société et d'usines qu'en montage de ligne de production technologique.
    Devant certaines difficultés rencontrées on a très vite compris qu'au début une aide est précieuse et pour réussir son projet il faut s'entourer des bons experts
    Economiser quelques dollars de conseils peut s'avérer très onéreux à la sortie notamment dans le choix des techniques et process.et il souvent trop tard.
    Nous travaillons en amont du projet et en aval.
    Un seul objectif…. Faire tourner la ligne de production au meilleur cout et le plus rapidement. Un succès commun`,
    },
  },
});

export default strings;
