<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="mb-4">My Orders</h1>
        <v-expansion-panels>
          <v-expansion-panel v-for="order in orders" :key="order.id">
            <v-expansion-panel-header>
              <v-row>
                <v-col cols="8"> Order # {{ order.id }} </v-col>
                <v-col cols="$"> $ {{ order.order.total }} </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list>
                <v-list-item v-for="item in order.order.items" :key="item.id">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-content>
                    <v-list-item-subtitle>$ {{ item.price }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-content>
                    <v-list-item-subtitle>{{ item.quantity }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-list-item-subtitle>$ {{ (item.quantity * item.price).toFixed(2) }}</v-list-item-subtitle>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>  
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { db } from '../plugins/firebase'
export default {
  name: 'MyOrders',
  data() {
    return {
      orders: [],
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
    }),
  },
  mounted() {
    this.bind()
  },
  methods: {
    async bind() {
      await this.$bind('orders', db.collection('orders').where('user', '==', this.user.uid))
    },
  },
}
</script>