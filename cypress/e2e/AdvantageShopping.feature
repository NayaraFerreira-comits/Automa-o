Feature: Advantage Online Shopping

  Scenario: Buscar um produto
    Given Eu estou na página inicial do Advantage Online Shopping
    When Eu busco por "Laptop"
    Then Eu devo ver os resultados da busca para "Laptop"

  Scenario: Adicionar um produto ao carrinho
    Given Eu estou na página inicial do Advantage Online Shopping
    When Eu busco por "Laptop"
    And Eu adiciono o primeiro produto ao carrinho
    Then O produto deve estar no carrinho

  Scenario: Validar o conteúdo do carrinho
    Given Eu adicionei um produto ao carrinho
    When Eu prossigo para o checkout
    Then Eu devo ver o produto na tela de pagamento
