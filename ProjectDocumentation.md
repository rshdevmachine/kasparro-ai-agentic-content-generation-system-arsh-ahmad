# ProjectDocumentation.md — Agentic Product Content Automation System

## 1. Introduction
The **Agentic Product Content Automation System** is a multi-agent, modular, template-driven pipeline designed to transform raw product information into high-quality structured content. This documentation covers architecture, agents, message schemas, templates, data models, and pipeline execution logic.

## 2. Architecture Overview
The system is composed of multiple autonomous agents, logic blocks, templates, and an orchestrator. Each agent fulfills a single responsibility and communicates via structured message formats.

## 3. Agents

###  Product Ingestion Agent
- Normalizes raw product data
- Cleans text fields
- Outputs canonical ProductModel

###  Question Generator Agent
- Produces 15+ deterministic user questions
- Categorized into benefits, usage, safety, purchase, comparison

###  FAQ Agent
- Creates structured Q&A pairs
- Produces FAQBlock

###  Orchestrator Agent
- Executes pipeline DAG
- Passes messages between agents
- Builds final JSON pages

## 4. Logic Blocks (Pure Functions)
- Benefits Block
- Usage Block
- Safety Block
- Purchase Block
- Comparison Block

## 5. Data Models

### ProductModel
```
{
  "name": "",
  "description": "",
  "category": "",
  "benefits": [],
  "usage": { "instructions": [], "frequency": "" },
  "safety": [],
  "price": { "amount": 0, "currency": "" }
}
```

### Question Model
```
{
  "id": "",
  "category": "",
  "question": ""
}
```

### FAQBlock
```
{
  "faq_items": [
     { "question": "", "answer": "" }
  ]
}
```

## 6. Templates

### FAQ Template
```
{
 "page_type": "faq_page",
 "product": "{{product_name}}",
 "items": "{{faq_items}}"
}
```

### Product Page Template
```
{
 "product": "{{product_name}}",
 "description": "{{description}}",
 "benefits": "{{benefits_block}}",
 "usage": "{{usage_block}}",
 "safety": "{{safety_block}}",
 "purchase": "{{purchase_block}}"
}
```

### Comparison Template
```
{
 "product_a": "{{A.name}}",
 "product_b": "{{B.name}}",
 "comparison": "{{comparison_block}}"
}
```

## 7. Pipeline Flow
1. Raw Input → Ingestion Agent  
2. ProductModel → Question Generator  
3. Questions → FAQ Agent  
4. ProductModel → Logic Blocks  
5. Template Engine renders JSON  
6. Orchestrator outputs:
   - faq_page.json  
   - product_page.json  
   - comparison_page.json  

## 8. Error Handling
- Missing fields → ingestion error  
- Template mismatch → orchestration error  
- Non-deterministic outputs → regenerated with fixed logic  

## 9. Extensibility
- Add more agents (e.g., Image Caption Agent)
- Add more templates (HTML, XML)
- Enable CMS publishing

## 10. Testing Strategy
- Unit tests for logic blocks
- Integration tests for complete DAG
- Snapshot tests for deterministic JSON output

## 11. Conclusion
A scalable, modular, deterministic pipeline suitable for enterprise content automation systems.
