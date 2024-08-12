describe('Update Product Image API', () => {
    it('should update the product image successfully', () => {
      // Assumindo que você já criou um usuário e obteve um userId válido.
      const userId = 'yourUserId';
      const source = 'newImageSource';
      const color = 'newColor';
  
      cy.request('PUT', `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('imageId');
          // Valide se o produto foi atualizado corretamente
        });
    });
  });
  