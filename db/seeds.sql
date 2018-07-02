INSERT INTO authors (author_name, nationality)
VALUES 
    ('Joan Didion', 'American'),
    ('J.K. Rowling', 'British'),
    ('Claudi Alsina', 'Spanish'),
    ('Roger Nelson', 'American'),
    ('Carol Anshaw', 'American')
;

INSERT INTO saved_works 
    (title, author_id, genre, keyword, notes)
VALUES 
    ('The Year of Magical Thinking', 1, 'memoir', 'didion1',
        'There was a scene I liked but forgot; 
        I think she was writing her late husband 
        letters and to-do lists even though he had died...'
    ), ("Harry Potter and the Sorcerer's Stone", 2, 'fantasy', 'rowling1',
        "I still need to read this series... only got to 
        the fourth book."
    ), ("A Mathematical Space Odyssey: Solid Geometry in the 21st Century",
    3, 'mathematics', 'geometry1',
        "I loved being able to show an 8th-grader the visual 
        proofs of summation formulas."
    ), ("A Mathematical Space Odyssey: Solid Geometry in the 21st Century",
    4, 'mathematics', 'geometry1',
        "I loved being able to show an 8th-grader the visual 
        proofs of summation formulas."
    ), ("The Last Speaker of the Language", 3, 'short fiction', 'anshaw1',
        "Perfect last image of Darlyn's alcoholic mother's 
        new boyfriend teaching her prodigal daughter how to 
        gamble."
    )
;