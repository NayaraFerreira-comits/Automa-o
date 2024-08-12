describe('Product Search API', () => {
    it('should return products matching the search query', () => {
      cy.request('GET', 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search', {
        search: 'Laptop'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('products');
        expect(response.body.products).to.satisfy(products => products.every(p => p.name.includes('Laptop')));
      });
    });
  });
  