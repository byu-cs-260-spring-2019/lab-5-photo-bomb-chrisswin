const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const router = express.Router();

var db = firebase.firestore();
var docRef = db.collection('Favorites');

//Posts someone's favorite song and ties it to their email
router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        let item = {
            email: req.body.user,
            favSong: req.body.favSong,
            songId: req.body.songId,
        };
        docRef.doc(item.email).set(item);
        res.send(item);
      } catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
});

// Deletes the whole document belonging to that user
router.delete('/:user', async (req, res) => {
    console.log('email: ', req.params.user);
    try{
        console.log("got database",)
        let findEmail = req.params.user;
        docRef.doc(findEmail).delete();
        let querySnapshot = await docRef.get();
        console.log(querySnapshot.docs.map(doc => doc.data()));
        res.send(querySnapshot.docs.map(doc => doc.data()));
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});

//Updates the document of the user to give them a favorite song
router.put('/', async (req, res) => {
    try{
        
        docRef.doc(req.body.email).update({
            favSong: req.body.favSong,
            songId: req.body.songId,
        })
        let querySnapshot = await docRef.get();
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});

//Gets the favorite song of the user by email
router.get('/:user', async (req, res) => {
    try{
        let userEmail = req.params.user;
        let querySnapshot = await docRef.where('email', '==', userEmail).get();
        res.send(querySnapshot.docs.map(doc => doc.data()));
    }catch(err){
        res.sendStatus(500);
    }
});

module.exports = router;