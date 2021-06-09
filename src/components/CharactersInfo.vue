<template>
  <div class="row justify-content-between text-center text-white">
    <!-- COLUMNA 1 -->
    <div class="col">
      <div class="row row-bg justify-content-center">
        <div class="row row-head"> <div>¿Donde obtener?</div> </div>
        <div class="row">
          <div>Gacha festival</div>
          <div style="color: green"> -- Disponible --</div>
        </div>
      </div>
      <div class="row row-bg justify-content-center">
        <div class="row row-head"> <div>Evaluacion del personaje</div> </div>
        <div class="row">
          <div class="col"> <div>PVP</div> </div>
          <div class="col"> <div>---</div> </div>
        </div>
        <div class="row">
          <div class="col"> <div>Historia</div> </div>
          <div class="col"> <div>---</div> </div>
        </div>
        <div class="row">
          <div class="col"> <div>Demonios</div> </div>
          <div class="col"> <div>---</div> </div>
        </div>
      </div>
      <div class="row row-bg justify-content-center">
        <div class="row row-head"> <div>Accesorios recomendados</div> </div>
        <div class="row">
          <div class="col"> <div>ACCS1</div> </div>
          <div class="col"> <div>ACCS2</div> </div>
        </div>
      </div>
      <div class="row row-bg justify-content-center">
        <div class="row row-head"> <div>Substats recomendados</div> </div>
        <div class="row"> <div>SUBSTATS 1</div> </div>
        <div class="row"> <div>SUBSTATS 2</div> </div>
        <div class="row"> <div>SUBSTATS 3</div> </div>
      </div>
    </div>
    <!-- COLUMNA 2 -->
    <div class="col-6">
      <div class="fs-2">HABILIDADES</div>
      <div class="row row-bg justify-content-center">
        <div class="row row-head"> <div>Pasiva</div> </div>
        <div class="row py-1">
          <div class="col"> <img src="/img/characters/pasive157.png" alt="" /> </div>
          <div class="col"> <div>Si todos los aliados son humanos, aumenta el HP MÄX de todos los aliados en 30% e incrementa el daño causado hacia los enemigos en 20%. (Aplica cuando participa en Batalla)</div> </div>
        </div>
        <div class="row row-head">
          <ul id="pills-tab" class="nav nav-pills justify-content-center" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                id="pills-level1-tab"
                class="nav-link text-white active"
                data-bs-toggle="pill"
                data-bs-target="#pills-level1"
                type="button"
                role="tab"
                aria-controls="pills-level1"
                aria-selected="true"
              >
                level1
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="pills-level2-tab"
                class="nav-link text-white"
                data-bs-toggle="pill"
                data-bs-target="#pills-level2"
                type="button"
                role="tab"
                aria-controls="pills-level2"
                aria-selected="false"
              >
                level2
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="pills-level3-tab"
                class="nav-link text-white"
                data-bs-toggle="pill"
                data-bs-target="#pills-level3"
                type="button"
                role="tab"
                aria-controls="pills-level3"
                aria-selected="false"
              >
                level3
              </button>
            </li>
          </ul>
        </div>
        <div id="pills-tabContent" class="tab-content">
          <div id="pills-level1" class="tab-pane fade show active" role="tabpanel" aria-labelledby="pills-level1-tab">
            <div class="row py-1">
              <div class="col"> <img src="/img/characters/s1157.png" alt="" class="card-size" /> </div>
              <div class="col">DESCROPCION 1.1 Lorem ipsum dolor sit amet.</div>
            </div>
            <div class="row py-1">
              <div class="col"> <img src="/img/characters/s2157.png" alt="" class="card-size" /> </div>
              <div class="col">DESCROPCION 2.1 Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
          <div id="pills-level2" class="tab-pane fade" role="tabpanel" aria-labelledby="pills-level2-tab">
            <div class="row py-1">
              <div class="col"> <img src="/img/characters/s1157.png" alt="" class="card-size" /> </div>
              <div class="col">DESCROPCION 1.2 Lorem ipsum dolor sit amet.</div>
            </div>
            <div class="row py-1">
              <div class="col"> <img src="/img/characters/s2157.png" alt="" class="card-size" /> </div>
              <div class="col">DESCROPCION 2.2 Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
          <div id="pills-level3" class="tab-pane fade" role="tabpanel" aria-labelledby="pills-level3-tab">
            <div class="row py-1">
              <div class="col"> <img src="/img/characters/s1157.png" alt="" class="card-size" /> </div>
              <div class="col">DESCROPCION 1.3 Lorem ipsum dolor sit amet.</div>
            </div>
            <div class="row py-1">
              <div class="col"> <img src="/img/characters/s2157.png" alt="" class="card-size" /> </div>
              <div class="col">DESCROPCION 2.3 Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
        </div>
        <div class="row row-head"> <div>Ultimate</div> </div>
        <div class="row py-1">
          <div class="col"> <img src="/img/characters/ulti_liz_01.png" alt="" class="card-size" /> </div>
          <div class="col">DESCRIPCION-U Lorem ipsum dolor sit amet consectetur.</div>
        </div>
      </div>
    </div>
    <!-- COLUMNA 3 -->
    <div class="col">
      <div class="row row-bg justify-content-center">
        <div class="row">
          <img src="/img/characters/picture157.png" alt="" class="img-size py-3 mx-auto" />
          <div></div>
        </div>
        <div class="row">
          <div class="col">Atributo</div>
          <div class="col">Atributo</div>
        </div>
        <div class="row">
          <div class="col">Rareza</div>
          <div class="col">Rareza</div>
        </div>
        <div class="row">
          <div class="col">Raza</div>
          <div class="col">Raza</div>
        </div>
      </div>
      <div class="row row-bg justify-content-center">
        <div class="row row-head"> Personajes de enlace </div>
        <div class="row">
          <div class="col">IMG</div>
          <div class="col">Texto</div>
        </div>
        <div class="row">
          <div class="col">IMG</div>
          <div class="col">Texto</div>
        </div>
        <div class="row">
          <div class="col">IMG</div>
          <div class="col">Texto</div>
        </div>
        <div class="row">
          <div class="col">IMG</div>
          <div class="col">Texto</div>
        </div>
        <div class="row">
          <div class="col">IMG</div>
          <div class="col">Texto</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getCharacter } from '@/store/characters';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const character = computed(() => getCharacter(props.id));
    return { character };
  },
});
</script>

<style lang="scss" scoped>

.row-bg {
  background-color: #a86a67;
  margin: 20px 0px 20px 0px;
}

.row-head {
  background-color: #f5362c;
  font-size: 1.2em;
  font-weight: bold;
  padding-top: 1px;
  padding-bottom: 1px;
}

.img-size {
  width: 220px;
  height: 328px;
}

.card-size {
  width: 125px;
  height: 200px;
}

</style>
