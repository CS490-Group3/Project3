# pylint: disable=no-member
# pylint: disable=too-few-public-methods
"""
This module contains database models needed for the application
"""

from app.exts import db


class Person(db.Model):
    """
    Model for person table
    """

    __tablename__ = "person"

    id = db.Column(db.String(30), primary_key=True)
    name = db.Column(db.String(30), nullable=False)

    contacts = db.relationship("Contact", backref="person", lazy=True)


class Contact(db.Model):
    """
    Model for contact table
    """

    __tablename__ = "contact"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(30), nullable=False)
    phone = db.Column(db.String(30), nullable=False)
    person_id = db.Column(db.String(30), db.ForeignKey("person.id"), nullable=False)

    events = db.relationship("Event", backref="contact", lazy=True)


class Event(db.Model):
    """
    Model for event table
    """

    __tablename__ = "event"

    id = db.Column(db.Integer, primary_key=True)
    activity = db.Column(db.String(30), nullable=False)
    time = db.Column(db.DateTime(), nullable=False)
    period = db.Column(db.Integer, nullable=True)
    contact_id = db.Column(db.Integer, db.ForeignKey("contact.id"), nullable=False)
