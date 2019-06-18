<template>
<div>
  <div v-if="user" class="header">
    <div class="button">
      <button @click="logout" class="pure-button pure-button-primary">Logout</button>
    </div>
    <br>
  </div>


  <div v-else>
    <router-link to="/register" class="pure-button">Register</router-link> or
    <router-link to="/login" class="pure-button">Login</router-link>
  </div>

  <div class="favoriteBlink" v-if="user">
        <div v-if="!picking">
            The Favorite Song of {{userEmail}} is {{favoriteSong}}!
            <button @click="pickingTrue" class="pure-button pure-button-primary">Pick New Song</button>
            <button @click="logout" class="pure-button pure-button-primary">Delete My Favorite Song</button>
        </div>
        <div v-else >
            <h2>Choose Your Favorite Blink 182 Song</h2>
            <div class="album">
                <img src="https://is2-ssl.mzstatic.com/image/thumb/Music18/v4/b3/f9/e8/b3f9e81d-cd9d-49d1-fcf7-d427e2814994/source/100x100bb.jpg" alt="California">
                <h4>California</h4>
                <button @click="getBlink(1107053773)">View Album</button>
                
                <div class="songs" v-if="california != []">
                    <ol>
                        <li v-for="item in california" v-bind:key="item"> 
                            <p> 
                                {{item.title}}  
                                <button @click="newSong = item.title, newId = item.id, selectSong, pickingFalse">
                                    Select</button>
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div class="album">
                <img src="https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/69/fd/0e/69fd0ec3-9c14-0dbd-48e3-ac42dcb593d1/source/100x100bb.jpg" alt="Neighborhoods">
                <h4>Neighborhoods</h4>
                <button @click="getBlink(1440845741)">View Album</button>
                <div class="songs" v-if="neighborhoods != []">
                    <ol>
                        <li v-for="item in neighborhoods" v-bind:key="item"> 
                            <p> 
                                {{item.title}}  
                                <button @click="newSong = item.title, newId = item.id, selectSong, pickingFalse">
                                    Select</button>
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div class="album">
                <img src="https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/69/5b/da/695bda0c-94ec-f90d-d422-0d0002926ffd/source/30x30bb.jpg" alt="Blink 182">
                <h4>Blink 182</h4>
                <button @click="getBlink(1442997224)">View Album</button>
                <div class="songs" v-if="blink182 != []">
                    <ol>
                        <li v-for="item in blink182" v-bind:key="item"> 
                            <p> 
                                {{item.title}}  
                                <button @click="newSong = item.title, newId = item.id, selectSong, pickingFalse">
                                    Select</button>
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div class="album">
                <img src="https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/31/cd/81/31cd8103-3813-598f-4543-b06cc85aaab9/source/30x30bb.jpg" alt="Take off Your Pants and Jacket">
                <h4>Take Off Your Pants and Jacket</h4>
                <button @click="getBlink(1440844785)">View Album</button>
                <div class="songs" v-if="takeOffYourPantsAndJacket != []">
                    <ol>
                        <li v-for="item in takeOffYourPantsAndJacket" v-bind:key="item"> 
                            <p> 
                                {{item.title}}  
                                <button @click="newSong = item.title, newId = item.id, selectSong, pickingFalse">
                                    Select</button>
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div class="album">
                <img src="https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/69/fd/0e/69fd0ec3-9c14-0dbd-48e3-ac42dcb593d1/source/100x100bb.jpg" alt="Enema of the State">
                <h4>Enema of the State</h4>
                <button @click="getBlink(1440839912)">View Album</button>
                <div class="songs" v-if="enemaOfTheState != []">
                    <ol>
                        <li v-for="item in enemaOfTheState" v-bind:key="item">
                            <p> 
                                {{item.title}}  
                                <button @click="newSong = item.title, newId = item.id, selectSong, pickingFalse">
                                    Select</button>
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div class="album">
                <img src="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/7e/29/73/7e297384-1240-a457-1b80-15a92cec0625/source/30x30bb.jpg" alt="Dude Ranch">
                <h4>Dude Ranch</h4>
                <button @click="getBlink(1440844811)">View Album</button>
                <div class="songs" v-if="dudeRanch != []">
                    <ol>
                        <li v-for="item in dudeRanch" v-bind:key="item"> 
                            <p> 
                                {{item.title}}  
                                <button @click="newSong = item.title, newId = item.id, selectSong, pickingFalse">
                                    Select</button>
                            </p>
                        </li>
                    </ol>
                </div>      
            </div>
            <div class="album">
                <img src="https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/46/01/ee/4601eea4-ea58-a3b4-6db0-4ff2b1b54ec8/source/30x30bb.jpg" alt="Cheshire Cat Album">
                <h4>Cheshire Cat</h4>
                <button @click="getBlink(1440846976)">View Album</button>
                <div class="songs" v-if="cheshireCat != []">
                    <ol>
                        <li v-for="item in cheshireCat" v-bind:key="item" class="song"> 
                            <p> 
                                {{item.title}}  
                                <button @click="newSong = item.title, newId = item.id, selectSong, pickingFalse">
                                    Select</button>
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

</div>

</template>


<script>
import axios from 'axios';
export default {
  name: 'mypage',
  data: function() {
      return {
        user: null,
        picking: false,
        favoriteSong: '',
        favoriteId: '',
        userEmail: '',

        newSong: '',
        newId: '',

        cheshireCat: [],
        dudeRanch: [],
        enemaOfTheState: [],
        takeOffYourPantsAndJacket: [],
        blink182: [],
        neighborhoods: [],
        california: [],

        cheshireCatCover: 'https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/46/01/ee/4601eea4-ea58-a3b4-6db0-4ff2b1b54ec8/source/30x30bb.jpg',
        dudeRanchCover: 'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/7e/29/73/7e297384-1240-a457-1b80-15a92cec0625/source/30x30bb.jpg',
        enemaOfTheStateCover: 'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/69/fd/0e/69fd0ec3-9c14-0dbd-48e3-ac42dcb593d1/source/100x100bb.jpg',
        takeOffYourPantsAndJacketCover: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/31/cd/81/31cd8103-3813-598f-4543-b06cc85aaab9/source/30x30bb.jpg',
        blink182Cover: 'https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/69/5b/da/695bda0c-94ec-f90d-d422-0d0002926ffd/source/30x30bb.jpg',
        neighborhoodsCover: 'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/69/fd/0e/69fd0ec3-9c14-0dbd-48e3-ac42dcb593d1/source/100x100bb.jpg',
        californiaCover: 'https://is2-ssl.mzstatic.com/image/thumb/Music18/v4/b3/f9/e8/b3f9e81d-cd9d-49d1-fcf7-d427e2814994/source/100x100bb.jpg',

        cheshireCatId: '1440846976',
        dudeRanchId: '1440844811',
        enemaOfTheStateId: '1440839912',
        takeOffYourPantsAndJacketId: '1440844785',
        blink182Id: '1442997224',
        neighborhoodsId: '1440845741',
        californiaId: '1107053773',
      }



  },
    computed: {
        user() {
            this.userEmail = this.$store.state.user;
            return this.$store.state.user;
        },
    },
    created() {
            this.$store.dispatch("getUser");
            this.user = this.$store.state.user;
            this.userEmail = this.user;
            this.getFavorite(this.user);
    },
    methods: {
        async logout() {
            try {
                this.error = await this.$store.dispatch("logout");
            } catch (error) {
                console.log(error);
            }
        },
        async getBlink(albumId) {     
            try {
                    let url = 'https://itunes.apple.com/lookup?id=' + albumId + '&entity=song';
                    let response = await fetch(url);
                    let json1 = await response.json();
                    console.log(json1);
                    let trackNum = json1.results[0].trackCount
                    let idString = parseInt(albumId);
                    for (var j = 1; j <= trackNum; j++) {
                        let song = {
                            title: json1.results[j].trackName,
                            id: json1.results[j].trackId,
                        }
                        switch (albumId) {
                            case 1440846976: 
                                this.cheshireCat.push(song);
                                console.log("cheshire cat: ", this.cheshireCat);
                                break;
                            case 1440844811: 
                                this.dudeRanch.push(song);
                                break;
                            case 1440839912: 
                                this.enemaOfTheState.push(song);
                                break;    
                            case 1440844785: 
                                this.takeOffYourPantsAndJacket.push(song);
                                break;
                            case 1442997224: 
                                this.blink182.push(song);
                                break;
                            case 1440845741: 
                                this.neighborhoods.push(song);
                                break;
                            case 1107053773: 
                                this.california.push(song);
                                break;                    
                        }
                }
            } catch(err) {
                console.log(err);
            }
        },
        async getFavorite(email) {
            try {
                let response = await axios.get("/api/items/" + email);
                this.favoriteSong = response.data.favSong;
                console.log(response.data);
                return true;
            } catch (error) {
                console.log(error);
            }
            if (this.favoriteSong == '') {
                this.picking = true;
            }
        },
        async updateFavorite() {

        },
        async deleteFavorite() {

        },
        async addFavorite() {
            try {
                let result = await axios.post('/api/items', {
                email: this.userEmail,
                favSong: this.newSong,
                songId: this.newId,
                });
                this.addItem = result.data;
                this.title = "";
                this.selected = "";
            } catch (error) {
                console.log(error);
            }
        },
        pickingFalse() {
            this.picking = false;
        },
        pickingTrue() {
            this.picking = true;
        },
        selectSong() {
            if (this.favoriteSong != '') {
                this.updateFavorite();
            }
            else {
                this.addFavorite();
            }
            this.getFavorite();
        }


    }
}
</script>

<style scoped>
.button button{
    top: 0;
    right: 0;
}
.pure-button {
  margin: 0px 20px;
}

.header {
  display: flex;
}

.header .button {
  margin-left: 50px;
  order: 2;
}

.favoriteBlink {
    flex-direction: column;
    border-style: solid;
    border-width: 2px;
    border-color: black;
    margin-top: 10px;
    margin-right: 30px;

}

.album {
    display:inline;
}
</style>