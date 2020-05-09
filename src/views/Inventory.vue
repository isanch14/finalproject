<template>
  <v-container>
    <v-row justify="center">
      <v-btn color="success darken-1" @click.stop="adding = true">Add New Product</v-btn>
      <v-dialog v-model="adding" max-width="480">
        <v-card>
          <v-card-title class="headline">Add New Product</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field v-model="newProduct.name" label="Name" />
              <v-textarea v-model="newProduct.description" label="Description" />
              <v-text-field v-model="newProduct.quantity" label="Qty" />
              <v-text-field v-model="newProduct.price" label="Price" />
              <v-checkbox v-model="newProduct.showCatalog" label="Show in Catalog" />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn text color="red darken-1" @click="clear">Cancel</v-btn>
            <v-btn text color="green darken-1" @click="add">Add</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center" class="mt-8">
      <h1 class="mb-4">ALL PRODUCTS</h1>
      <v-col cols="12">
        <v-data-table :headers="productsHeaders" :items="products" class="elevation-1"></v-data-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h1 class="mb-4">ALL ORDERS</h1>
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
import { db } from '../plugins/firebase'
export default {
  name: 'Inventory',
  data() {
    return {
      adding: false,
      newProduct: {
        name: '',
        description: '',
        quantity: 0,
        price: 0,
        showCatalog: false,
      },
      productsHeaders: [
        { text: 'Name', value: 'name' },
        { text: 'Description', value: 'description' },
        { text: 'Qty', value: 'quantity' },
        { text: 'Price', value: 'price' },
        { text: 'Show', value: 'showCatalog' },
      ],
      products: [],
      orders: [],
    }
  },
  created() {
    this.bind()
  },
  methods: {
    clear() {
      this.newProduct = {
        name: '',
        description: '',
        quantity: 0,
        price: 0,
        showCatalog: false,
      }
      this.adding = false
    },
    async add() {
      await db.collection('products').add(this.newProduct)
      this.clear()
    },
    async bind() {
      await this.$bind('products', db.collection('products'))
      await this.$bind('orders', db.collection('orders'))
    },
  },
}
</script>
