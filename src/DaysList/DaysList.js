import React from "react";
import "./DaysList.scss";
import DaysListHeading from "./DaysListHeading";

function DaysList() {
  return (
    <section class="page-main__day-list days-list">
      <h2 class="visually-hidden">Days List</h2>
      <DaysListHeading />
      <section class="day-list__item day">
        <div class="day__heading-wrapper">
          <h3 class="day__date">
            Wed, <span class="day__date_not-bold">June 10</span>
          </h3>
          <div class="day__total-time-wrapper">
            <p class="day__total-time">06:05:00</p>
            <div class="day__progress-bar">
              <div class="day__progress-value"></div>
            </div>
          </div>
          <button class="day__btn-download">
            <span class="visually-hidden">Download</span>
          </button>
        </div>
        <ul class="day__worklogs-list">
          <li class="day__worklog-item-wrapper">
            <div class="day__worklog-item">
              <p class="day__interval-time">
                09:00 <span class="day__interval-time_gray">— 10:00</span>
              </p>
              <div class="day__worklog-name-wrapper">
                <span class="day__code">JRM-310</span>
                <h4 class="day__worklog-name">Team standup</h4>
              </div>
              <div class="day__worklog-bar">
                <div class="day__worklog-value"></div>
              </div>
              <span class="day__worklog-time">01:00:00</span>
              <button class="day__btn">
                <span class="visually-hidden">Play</span>
              </button>
            </div>
            <div class="day__on-hover">
              <button class="day__options-btn">
                <span class="day__btn-round"></span>
              </button>
            </div>
            <ul class="worklog-options day__worklog-menu">
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Jira link</button>
              </li>
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Duplicate</button>
              </li>
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Add to favorite</button>
              </li>
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Delete</button>
              </li>
            </ul>
          </li>
          <li class="day__worklog-item-wrapper">
            <div class="day__worklog-item">
              <p class="day__interval-time">
                10:00 <span class="day__interval-time_gray">— 11:15</span>
              </p>
              <div class="day__worklog-name-wrapper day__worklog-name-wrapper_full">
                <span class="day__code">JRM-310</span>
                <h4 class="day__worklog-name">Meeting with QA</h4>
              </div>
              <div class="day__worklog-bar">
                <div class="day__worklog-value day__worklog-value_full"></div>
              </div>
              <span class="day__worklog-time">01:15:00</span>
              <button class="day__btn">
                <span class="visually-hidden">Play</span>
              </button>
            </div>
            <div class="day__on-hover">
              <button class="day__options-btn">
                <span class="day__btn-round"></span>
              </button>
            </div>
            <ul class="worklog-options day__worklog-menu">
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Jira link</button>
              </li>
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Duplicate</button>
              </li>
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Add to favorite</button>
              </li>
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Delete</button>
              </li>
            </ul>
          </li>
          <li class="day__worklog-item-wrapper">
            <div class="day__worklog-item">
              <div class="day__interval-time-btn">
                <span class="day__amount">2</span>
              </div>
              <div class="day__worklog-name-wrapper day__worklog-name-wrapper_in-progress">
                <span class="day__code">JRM-310</span>
                <h4 class="day__worklog-name">Company branding</h4>
              </div>
              <div class="day__worklog-bar">
                <div class="day__worklog-value day__worklog-value_in-progress"></div>
              </div>
              <span class="day__worklog-time">03:50:00</span>
              <button class="day__btn">
                <span class="visually-hidden">Play</span>
              </button>
            </div>
            <div class="day__on-hover">
              <button class="day__options-btn">
                <span class="day__btn-round"></span>
              </button>
            </div>
            <ul class="worklog-options day__worklog-menu">
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Jira link</button>
              </li>
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Duplicate</button>
              </li>
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Add to favorite</button>
              </li>
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Delete</button>
              </li>
            </ul>
          </li>
        </ul>
        <div class="day__time-picker">
          <div class="day__time-picher-range"></div>
          <ul class="day__time-list">
            <li>07:00</li>
            <li>08:00</li>
            <li>09:00</li>
            <li>10:00</li>
            <li>11:00</li>
            <li>12:00</li>
            <li>13:00</li>
            <li>14:00</li>
            <li>15:00</li>
            <li>16:00</li>
            <li>17:00</li>
            <li>18:00</li>
            <li>19:00</li>
          </ul>
        </div>
      </section>
      <section class="day-list__item day">
        <div class="day__heading-wrapper">
          <h3 class="day__date">
            Tue, <span class="day__date_not-bold">June 09</span>
          </h3>
          <div class="day__total-time-wrapper">
            <p class="day__total-time">08:00:00</p>
            <div class="day__progress-bar">
              <div class="day__progress-value day__progress-value_full"></div>
            </div>
          </div>
          <button class="btn day__btn-download">
            <span class="visually-hidden">Download</span>
          </button>
        </div>
        <ul class="day__worklogs-list">
          <li class="day__worklog-item-wrapper">
            <div class="day__worklog-item">
              <p class="day__interval-time">
                09:00 <span class="day__interval-time_gray">— 10:00</span>
              </p>
              <div class="day__worklog-name-wrapper day__worklog-name-wrapper_full">
                <span class="day__code">JRM-310</span>
                <h4 class="day__worklog-name">Team standup</h4>
              </div>
              <div class="day__worklog-bar">
                <div class="day__worklog-value"></div>
              </div>
              <span class="day__worklog-time">01:00:00</span>
              <button class="day__btn">
                <span class="visually-hidden">Play</span>
              </button>
            </div>
            <div class="day__on-hover">
              <button class="day__options-btn">
                <span class="day__btn-round"></span>
              </button>
            </div>
            <ul class="worklog-options day__worklog-menu">
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Jira link</button>
              </li>
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Duplicate</button>
              </li>
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Add to favorite</button>
              </li>
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Delete</button>
              </li>
            </ul>
          </li>
          <li class="day__worklog-item-wrapper">
            <div class="day__worklog-item">
              <p class="day__interval-time">
                10:00 <span class="day__interval-time_gray">— 11:15</span>
              </p>
              <div class="day__worklog-name-wrapper day__worklog-name-wrapper_full">
                <span class="day__code">JRM-310</span>
                <h4 class="day__worklog-name">Meeting with QA</h4>
              </div>
              <div class="day__worklog-bar">
                <div class="day__worklog-value"></div>
              </div>
              <span class="day__worklog-time">01:15:00</span>
              <button class="day__btn">
                <span class="visually-hidden">Play</span>
              </button>
            </div>
            <div class="day__on-hover">
              <button class="day__options-btn">
                <span class="day__btn-round"></span>
              </button>
            </div>
            <ul class="worklog-options day__worklog-menu">
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Jira link</button>
              </li>
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Duplicate</button>
              </li>
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Add to favorite</button>
              </li>
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Delete</button>
              </li>
            </ul>
          </li>
          <li class="day__worklog-item-wrapper">
            <div class="day__worklog-item">
              <p class="day__interval-time">
                11:00 <span class="day__interval-time_gray">— 13:15</span>
              </p>
              <div class="day__worklog-name-wrapper day__worklog-name-wrapper_in-progress">
                <span class="day__code">JRM-310</span>
                <h4 class="day__worklog-name">Company branding</h4>
              </div>
              <div class="day__worklog-bar">
                <div class="day__worklog-value"></div>
              </div>
              <span class="day__worklog-time">03:50:00</span>
              <button class="day__btn">
                <span class="visually-hidden">Play</span>
              </button>
            </div>
            <div class="day__on-hover">
              <button class="day__options-btn">
                <span class="day__btn-round"></span>
              </button>
            </div>
            <ul class="worklog-options day__worklog-menu">
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Jira link</button>
              </li>
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Duplicate</button>
              </li>
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Add to favorite</button>
              </li>
              <li class="worklog-options__item">
                <button class="worklog-options__btn">Delete</button>
              </li>
            </ul>
          </li>
        </ul>
        <div class="day__time-picker">
          <div class="day__time-picher-range"></div>
          <ul class="day__time-list">
            <li>07:00</li>
            <li>08:00</li>
            <li>09:00</li>
            <li>10:00</li>
            <li>11:00</li>
            <li>12:00</li>
            <li>13:00</li>
            <li>14:00</li>
            <li>15:00</li>
            <li>16:00</li>
            <li>17:00</li>
            <li>18:00</li>
            <li>19:00</li>
          </ul>
        </div>
      </section>
    </section>
  );
}

export default DaysList;
