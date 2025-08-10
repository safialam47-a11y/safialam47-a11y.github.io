import { Product } from '../types';

export const products: Product[] = [
  // Stationery
  {
    id: 'pen-set-1',
    name: 'Premium Pen Set',
    description: 'High-quality gel pens with smooth writing experience. Perfect for students and professionals.',
    price: '₹299',
    image: 'https://images.pexels.com/photos/159644/art-supplies-brushes-rulers-scissors-159644.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    category: 'stationery',
    buyLinks: {
      amazon: 'https://amazon.in',
      flipkart: 'https://flipkart.com'
    },
    featured: true
  },
  {
    id: 'notebook-1',
    name: 'Designer Notebooks',
    description: 'Colorful notebooks with attractive designs. Great for school and office use.',
    price: '₹199',
    image: 'https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    category: 'stationery',
    buyLinks: {
      amazon: 'https://amazon.in',
      flipkart: 'https://flipkart.com'
    }
  },
  {
    id: 'art-supplies-1',
    name: 'Art Supply Kit',
    description: 'Complete art supplies including colors, brushes, and sketching materials.',
    price: '₹599',
    image: 'https://images.pexels.com/photos/1153838/pexels-photo-1153838.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    category: 'stationery',
    buyLinks: {
      amazon: 'https://amazon.in',
      flipkart: 'https://flipkart.com'
    }
  },
  // Sports Equipment
  {
    id: 'cricket-set-1',
    name: 'Cricket Bat & Ball Set',
    description: 'Professional cricket bat and ball set. Perfect for beginners and enthusiasts.',
    price: '₹1,299',
    image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    category: 'sports',
    buyLinks: {
      amazon: 'https://amazon.in',
      flipkart: 'https://flipkart.com'
    },
    featured: true
  },
  {
    id: 'football-1',
    name: 'Professional Football',
    description: 'High-quality leather football suitable for all age groups.',
    price: '₹799',
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    category: 'sports',
    buyLinks: {
      amazon: 'https://amazon.in',
      flipkart: 'https://flipkart.com'
    }
  },
  {
    id: 'badminton-set-1',
    name: 'Badminton Racket Set',
    description: 'Complete badminton set with 2 rackets and shuttlecocks.',
    price: '₹999',
    image: 'https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    category: 'sports',
    buyLinks: {
      amazon: 'https://amazon.in',
      flipkart: 'https://flipkart.com'
    }
  },
  // Gifts
  {
    id: 'puzzle-game-1',
    name: 'Educational Puzzle Game',
    description: 'Fun and educational puzzle games for kids and adults.',
    price: '₹399',
    image: 'https://images.pexels.com/photos/1407329/pexels-photo-1407329.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    category: 'gifts',
    buyLinks: {
      amazon: 'https://amazon.in',
      flipkart: 'https://flipkart.com'
    },
    featured: true
  },
  {
    id: 'board-game-1',
    name: 'Family Board Game',
    description: 'Exciting board games perfect for family game nights.',
    price: '₹699',
    image: 'https://images.pexels.com/photos/776654/pexels-photo-776654.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    category: 'gifts',
    buyLinks: {
      amazon: 'https://amazon.in',
      flipkart: 'https://flipkart.com'
    }
  },
  {
    id: 'gift-set-1',
    name: 'Student Gift Set',
    description: 'Complete gift set with stationery and small games for students.',
    price: '₹549',
    image: 'https://images.pexels.com/photos/1413652/pexels-photo-1413652.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    category: 'gifts',
    buyLinks: {
      amazon: 'https://amazon.in',
      flipkart: 'https://flipkart.com'
    }
  }
];