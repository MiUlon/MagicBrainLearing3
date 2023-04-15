import epxress from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt-nodejs';
import cors from 'cors';
import knex from 'knex';

const postgres = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        port : 5432,
        user : 'postgres',
        password : 'test',
        database : 'MagicBrainLearning3'
    }
});

const app = epxress();

app.use(bodyParser.json());
app.use(cors());

const database = {
    users: [
        {
            id: "1",
            name: "Mindaugas",
            email: "Mindaugas@gmail.com",
            password: "Mindaugas",
            entries: 0,
            joined: new Date()
        },
        {
            id: "2",
            name: "Mindaugas2",
            email: "Mindaugas2@gmail.com",
            password: "Mindaugas2",
            entries: 0,
            joined: new Date()
        }
    ],
    login: [
        {
            id: '01',
            hash: '',
            email: "Mindaugas@gmail.com"
        }
    ]
};

app.get('/', (req, res) => {
    res.json(database.users);
});

app.post('/signin', (req, res) => {
    bcrypt.compare("Mindaugas3", '$2a$10$ihXmFdlfxqQ9IBIp9HMl4OkJ7saJbtdt8CKjwD2zZuKHWIveDDZFO', function(err, res) {
        console.log('Result: ', res);
    });
    bcrypt.compare("veggies", '$2a$10$ihXmFdlfxqQ9IBIp9HMl4OkJ7saJbtdt8CKjwD2zZuKHWIveDDZFO', function(err, res) {
        console.log('Result: ', res);
    });
    if (req.body.email === database.users[0]. email && req.body.password === database.users[0].password) {
        res.json('Success');
    } else {
        res.status(400).json('Cannot sign in');
    };
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    postgres('users').insert({
        name: name,
        email: email,
        joined: new Date()
    }).then(console.log);
    res.json(database.users[database.users.length-1]);
});

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    postgres.select('*').from('users').where({
        id: id
    })
        .then(user => {
            if (user.length) {
                res.json(user[0]);
            } else {
                res.status(404).json('ID not found');
            }
        })
        .catch(error => res.status(400).json('Error'));
});

app.put('/image', (req, res) => {
    const { id } = req.body;
    postgres('users').where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries[0])
        })

        .catch(error => res.status(400).json('Cannot receive entries'));
});

app.listen(3001, () => {
    console.log('App is working on port 3001.');
});