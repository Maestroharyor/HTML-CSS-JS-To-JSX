import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
  name: string;
  image: string;
  price: number;
};

function ProductCard({ name, image, price }: Props) {
  const [quantity, setQuantity] = useState(0);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

  const increaseCartQuantity = () => {
    setQuantity(quantity + 1);
  };

  const reduceQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      alert("Item is not in cart");
    }
  };

  const toggleWishlist = () => {
    setIsAddedToWishlist(!isAddedToWishlist);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.wishlistButton,
          {
            backgroundColor: isAddedToWishlist ? "#eab308" : "white",
          },
        ]}
        onPress={toggleWishlist}
      >
        <Text style={styles.wishlistButtonText}>Wishlist</Text>
      </TouchableOpacity>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.productInfo}>
        <Text style={styles.newTag}>New</Text>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>${price}</Text>
        <View style={styles.quantityControl}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={reduceQuantity}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <View style={styles.quantityDisplay}>
            <Text>{quantity}</Text>
          </View>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={increaseCartQuantity}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={increaseCartQuantity}
        >
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f4f6",
    borderRadius: 10,
    overflow: "hidden",
    maxWidth: 400,
    marginBottom: 20,
  },
  wishlistButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
    borderRadius: 999,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  wishlistButtonText: {
    color: "#1f2937",
  },
  image: {
    height: 200,
    width: "100%",
  },
  productInfo: {
    padding: 20,
  },
  newTag: {
    backgroundColor: "#eab308",
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 12,
    fontWeight: "bold",
    width: 50,
  },
  productName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    marginTop: 5,
    fontSize: 14,
    color: "gray",
  },
  quantityControl: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 20,
  },
  quantityDisplay: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  addToCartButton: {
    marginTop: 20,
    backgroundColor: "#eab308",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
  },
  addToCartButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductCard;
