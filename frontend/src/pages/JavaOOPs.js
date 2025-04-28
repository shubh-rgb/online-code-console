import React from 'react';
import '../styles/JavaOOPs.css';

const JavaOOPs = () => {
  return (
    <div className="java-oops">
      <h1>Java OOPs Concepts</h1>

      <p>
        Java is an Object-Oriented Programming (OOP) language, which means it is based on the concept of objects.
        OOP helps organize complex programs using simple, reusable pieces of code (classes and objects).
      </p>

      <h2>Main OOP Concepts in Java:</h2>
      <ul>
        <li><b>Class</b>: A blueprint or template for creating objects.</li>
        <li><b>Object</b>: A real-world entity created from a class.</li>
        <li><b>Inheritance</b>: Mechanism where one class acquires properties and behaviors of another.</li>
        <li><b>Polymorphism</b>: Ability to take many forms (method overloading, overriding).</li>
        <li><b>Encapsulation</b>: Binding data and methods into a single unit, hiding internal details.</li>
        <li><b>Abstraction</b>: Hiding complexity and showing only essential features.</li>
      </ul>

      <h2>Example:</h2>
      <pre>
{`class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}

public class TestPolymorphism {
    public static void main(String args[]) {
        Animal a = new Dog();
        a.sound();
    }
}`}
      </pre>

      <p><i>Output: Dog barks</i></p>
    </div>
  );
};

export default JavaOOPs;
