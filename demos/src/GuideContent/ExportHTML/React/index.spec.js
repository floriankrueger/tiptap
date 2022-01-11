context('/src/GuideContent/ExportHTML/React/', () => {
  before(() => {
    cy.visit('/src/GuideContent/ExportHTML/React/')
  })

  beforeEach(() => {
    cy.get('.ProseMirror').then(([{ editor }]) => {
      editor.commands.setContent('<p>Example Text</p>')
    })
  })

  it('should return html', () => {
    cy.get('.ProseMirror').then(([{ editor }]) => {
      const html = editor.getHTML()

      expect(html).to.equal('<p>Example Text</p>')
    })
  })

  it('should not escape the ampersant characters in link hrefs', () => {
    cy.get('.ProseMirror').then(([{ editor }]) => {
      editor.commands.setContent('<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://blog.example.com/great-blog-post/?utm_source=test&utm_medium=cypress">link</a></p>')
      const html = editor.getHTML()
      expect(html).to.equal('<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://blog.example.com/great-blog-post/?utm_source=test&utm_medium=cypress">link</a></p>')
    })
  })
})
