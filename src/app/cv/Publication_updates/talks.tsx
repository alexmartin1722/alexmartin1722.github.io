export const talks_list = [
    {
      date: "March 2024",
      title: "FAMuS: Frames Across Multiple Sources",
      url: "PEER_FAMuS.pdf",
      conference: "PEER 2024",
      description:
        "Understanding event descriptions is a central aspect of language processing, but current approaches focus overwhelmingly on single sentences or documents.Aggregating information about an event across documents can offer a much richer understanding. To this end, we present FAMuS, a new corpus of Wikipedia passages that report on some event, paired with underlying, genre-diverse (non-Wikipedia) source articles for the same event. Events and (cross-sentence) arguments in both report and source are annotated against FrameNet, providing broad coverage of different event types. We present results on two key event understanding tasks enabled by FAMuS: source validation---determining whether a document is a valid source for a target report event---and cross-document argument extraction---full-document argument extraction for a target event from both its report and the correct source article. We release both FAMuS and our models to support further research.",
    },
    {
      date: "October 2023",
      title: "Jurassic World Remake: Bringing Ancient Fossils Back to Life via Zero-Shot Long Image-to-Image Translation",
      url: "ACMMM_JurassicWorldRemake.pdf",
      conference: "ACM MM 2023",
      description:
        "With a strong understanding of the target domain from natural language, we produce promising results in translating across large domain gaps and bringing skeletons back to life. In this work, we use text-guided latent diffusion models for zero-shot image-to-image translation (I2I) across large domain gaps (longI2I), where large amounts of new visual features and new geometry need to be generated to enter the target domain. Being able to perform translations across large domain gaps has a wide variety of real-world applications in criminology, astrology, environmental conservation, and paleontology. In this work, we introduce a new task Skull2Animal for translating between skulls and living animals. On this task, we find that unguided Generative Adversarial Networks (GANs) are not capable of translating across large domain gaps. Instead of these traditional I2I methods, we explore the use of guided diffusion and image editing models and provide a new benchmark model, Revive-2I, capable of performing zero-shot I2I via text-prompting latent diffusion models. We find that guidance is necessary for longI2I because, to bridge the large domain gap, prior knowledge about the target domain is needed. In addition, we find that prompting provides the best and most scalable information about the target domain as classifier-guided diffusion models require retraining for specific use cases and lack stronger constraints on the target domain because of the wide variety of images they are trained on.",
    },
  ];
  