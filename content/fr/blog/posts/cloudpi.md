---
title: Cloud PI
description: Description des services cloud proposés.
date: git Last Modified
tags:
  - cloud
  - caas
  - kubernetes
---
<script type="module">
      import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
      mermaid.initialize({ startOnLoad: true });
</script>

L'offre s'articule sur deux pans :
- le Cloud PI ` iaas openstack `. La documentation de l'offre est présentée sur le [portail PI](https://pi.interieur.rie.gouv.fr/home-dnum/cloud-%cf%80/qui-sommes-nous/cloud-iaas-gen2/).
- le Cloud PI `Native`. La documentation de l'offre est présentée sur le site [Cloud PI Native](https://pi.interieur.rie.gouv.fr/home-dnum/cloud-%cf%80/qui-sommes-nous/cloud-iaas-gen2/).
  
**Services Applicatifs sous k8s**

<pre class="mermaid">
  graph LR
  client([client])-. Ingress-managed <br> load balancer .->ingress[Ingress]
  ingress-->|routing rule|A[service 'A']
  subgraph cluster
  ingress
  A-->pod1[Pod]
  A-->pod2[Pod]
  end
  classDef plain fill:#ddd,stroke:#fff,stroke-width:4px,color:#000
  classDef k8s fill:#326ce5,stroke:#fff,stroke-width:4px,color:#fff
  classDef cluster fill:#fff,stroke:#bbb,stroke-width:2px,color:#326ce5
  class ingress,A,pod1,pod2 k8s
  class client plain
  class cluster cluster
</pre>


{%include "components/back_to_top.njk" %}
~                                          