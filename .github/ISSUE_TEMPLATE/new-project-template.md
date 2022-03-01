---
name: New Project template
about: This issue template is used for adding a new project to the repository.
title: ''
labels: ''
assignees: ''

---

name: New Issue
title: "[Create New Issue]: "
labels: ["GSSoC22"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to make an issue!
  - type: textarea
    id: description
    attributes:
      label: Description
      description: Enter a brief description about the project
      placeholder: Describe the project that you want to add. Also include some screenshots or gif/video for better understanding
      value: "Description"
    validations:
      required: true
  
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct]()
      options:
        - label: I follow [Code of conduct](https://github.com/surajm-333/Ace-The-FrontEnd/blob/main/CODE_OF_CONDUCT.md) of this project.
          required: true
