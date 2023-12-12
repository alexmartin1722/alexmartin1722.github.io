export const publication_list = [
  {
    date: "December 2023",
    title: "Event-Keyed Summarization",
    url: "https://scholar.google.com/citations?hl=en&user=6_4ethMAAAAJ",
    conference: "NAACL",
    description:
      "We introduce event-keyed summarization, a novel summarization task that marries traditional summarization and document-level event extraction (EE), with the goal of generating a contextualized, abstractive summary for a specific event described in a document, given the document text and an event structure extracted from the document. We introduce a dataset for this task, MUCSUM, consisting of summaries of all annotated events in the classic MUC dataset. We present a series of baselines on the task, comprising both standard pretrained LMs common in the summarization literature (BART, PEGASUS, T5), as well as larger frontier models (ChatGPT, GPT-4). Additionally, we present ablations to show that alternative task formulations yield inferior summaries of the target events. Finally, we present a human evaluation of reference and model outputs, as well as an evaluation that draws on standard metrics in document-level EE but that is novel in a summarization context.",
  },
  {
    date: "November 2023",
    title: "FAMuS: Frames Across Multiple Sources",
    url: "https://arxiv.org/abs/2311.05601",
    conference: "NAACL",
    description:
      "Understanding event descriptions is a central aspect of language processing, but current approaches focus overwhelmingly on single sentences or documents.Aggregating information about an event across documents can offer a much richer understanding. To this end, we present FAMuS, a new corpus of Wikipedia passages that report on some event, paired with underlying, genre-diverse (non-Wikipedia) source articles for the same event. Events and (cross-sentence) arguments in both report and source are annotated against FrameNet, providing broad coverage of different event types. We present results on two key event understanding tasks enabled by FAMuS: source validation---determining whether a document is a valid source for a target report event---and cross-document argument extraction---full-document argument extraction for a target event from both its report and the correct source article. We release both FAMuS and our models to support further research.",
  },
  {
    date: "October 2023",
    title:
      "Jurassic World Remake: Bringing Ancient Fossils Back to Life via Zero-Shot Long Image-to-Image Translation",
    url: "https://arxiv.org/abs/2308.07316",
    conference: "ACM MM",
    description:
      "With a strong understanding of the target domain from natural language, we produce promising results in translating across large domain gaps and bringing skeletons back to life. In this work, we use text-guided latent diffusion models for zero-shot image-to-image translation (I2I) across large domain gaps (longI2I), where large amounts of new visual features and new geometry need to be generated to enter the target domain. Being able to perform translations across large domain gaps has a wide variety of real-world applications in criminology, astrology, environmental conservation, and paleontology. In this work, we introduce a new task Skull2Animal for translating between skulls and living animals. On this task, we find that unguided Generative Adversarial Networks (GANs) are not capable of translating across large domain gaps. Instead of these traditional I2I methods, we explore the use of guided diffusion and image editing models and provide a new benchmark model, Revive-2I, capable of performing zero-shot I2I via text-prompting latent diffusion models. We find that guidance is necessary for longI2I because, to bridge the large domain gap, prior knowledge about the target domain is needed. In addition, we find that prompting provides the best and most scalable information about the target domain as classifier-guided diffusion models require retraining for specific use cases and lack stronger constraints on the target domain because of the wide variety of images they are trained on.",
  },
  {
    date: "July 2023",
    title:
      "MegaWika: Millions of reports and their sources across 50 diverse languages",
    url: "https://arxiv.org/abs/2307.07049",
    conference: "ArXiv",
    description:
      "To foster the development of new models for collaborative AI-assisted report generation, we introduce MegaWika, consisting of 13 million Wikipedia articles in 50 diverse languages, along with their 71 million referenced source materials. We process this dataset for a myriad of applications, going beyond the initial Wikipedia citation extraction and web scraping of content, including translating non-English articles for cross-lingual applications and providing FrameNet parses for automated semantic analysis. MegaWika is the largest resource for sentence-level report generation and the only report generation dataset that is multilingual. We manually analyze the quality of this resource through a semantically stratified sample. Finally, we provide baseline results and trained models for crucial steps in automated report generation: cross-lingual question answering and citation retrieval.",
  },
  {
    date: "March 2023",
    title:
      "A New Interpretation of Relative Importance on An Analysis of Per and Polyfluorinated Alkyl Substances (PFAS) Exposures on Bone Mineral Density",
    url: "https://www.mdpi.com/1660-4601/20/5/4539",
    conference: "IJERPH",
    description:
      "The relative contribution of environmental contaminants is an important, and frequently unanswered, question in human or ecological risk assessments. This interpretation of relative importance allows determination of the overall effect of a set of variables relative to other variables on an adverse health outcome. There are no underlying assumptions of independence of variables. The tool developed and used here is specifically designed for studying the effects of mixtures of chemicals on a particular function of the human body. Methods: We apply the approach to estimate the contributions of total exposure to six PFAS (perfluorodecanoic acid, perfluorohexane sulfonic acid, 2-(N-methyl-PFOSA) acetate, perfluorononanoic acid, perfluoroundecanoic acid and perfluoroundecanoic acid) to loss of bone mineral density relative to other factors related to risk of osteoporosis and bone fracture, using data from subjects who participated in the US National Health Examination and Nutrition Surveys (NHANES) of 2013-2014. Results: PFAS exposures contribute to bone mineral density changes relative to the following variables: age, weight, height, vitamin D2 and D3, gender, race, sex hormone binding globulin, testosterone, and estradiol. Conclusion: We note significant alterations to bone mineral density among more highly exposed adults and significant differences in effects between men and women.",
  },
];
