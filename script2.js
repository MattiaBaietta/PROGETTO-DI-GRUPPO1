const url=`https://opentdb.com/api.php?amount=10&category=18&difficulty=hard`




fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Errore nella richiesta API');
    }
    return response.json();
  })
  .then(data => {
    // Gestisci i dati ottenuti dall'API
    console.log('Dati ottenuti dall\'API:', data);
    
    // Ad esempio, accedi alle domande nel campo 'results'
    const questions = data.results;
    questions.forEach((question, index) => {
      console.log(`Domanda ${index + 1}: ${question.question}`);
    });
  })
  .catch(error => {
    console.error('Errore durante la richiesta API:', error);
  });


  